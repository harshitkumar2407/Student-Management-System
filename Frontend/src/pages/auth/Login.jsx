import React, { useState } from "react";
import "./Login.css";
import Button from "../../Components/Button/Button";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

    async function SubmitForm(e) {
      e.preventDefault();
      

  }

  return (
    <div className="Login_container">
      <h1>LOGIN</h1>

      <form className="Modal-contant" onSubmit={SubmitForm}>
        <label>Username</label>
        <input
          type="text"
          value={username}
          placeholder="Enter Username"
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};

export default Login;