import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Dashboard: React.FC = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>{`Olá ${user?.email}`}</h2>
    </div>
  );
};

export default Dashboard;
