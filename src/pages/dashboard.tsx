import React, { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { setupAPIClient } from "../services/api";
import { api } from "../services/apiClient";
import { withSSRAuth } from "../utils/withSSRAuth";

const Dashboard: React.FC = () => {
  const { user } = useContext(AuthContext);
  useEffect(() => {
    async function getMe() {
      const response = await api.get("me");
      console.log(response.data);
    }
    getMe();
  }, []);
  return (
    <div>
      <h1>Dashboard</h1>
      <h2>{`Olá ${user?.email}`}</h2>
    </div>
  );
};

export default Dashboard;

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx);
  const response = await apiClient.get("me");
  console.log("On Server Side :: ", response.data);
  return {
    props: {},
  };
});
