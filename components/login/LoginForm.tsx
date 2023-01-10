import { useState } from "react";
import InputBox from "../common/InputBox";
import axios from "axios";
import Router from "next/router";

export default function LoginForm() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const credentials = { username, password };

    const res = await axios.post(
      "http://localhost:5000/api/auth/login",
      credentials,
      { withCredentials: true }
    );

    Router.push("/");
  };

  return (
    <div>
      <h1>Login Template App</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <InputBox
          value={username}
          onChange={(e) => setUsername(e.currentTarget.value)}
        />
        <br />
        <label htmlFor="password">Password</label>
        <InputBox
          type="password"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
