import React, { useState } from "react";
import "./index.css";
import { errorFlag } from "../../data";

export default function () {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username.trim().length < 4) {
      errorFlag.setCurrent({ value: true, message: "Username is required" });
      return;
    }
    if (password.trim().length < 6) {
      errorFlag.setCurrent({
        value: true,
        message: "Password must be at least 6 characters",
      });
      return;
    }

    // Proceed with login
    console.log("Logging in with:", { username, password });
    errorFlag.setCurrent({ value: false });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
