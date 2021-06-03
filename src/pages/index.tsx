import { FormEvent, useState } from "react";

export default function Home() {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const data = {
      email,
      password,
    };
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Entrar</button>
    </form>
  );
}
