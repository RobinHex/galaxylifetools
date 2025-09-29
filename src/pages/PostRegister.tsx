// src/pages/PostRegister.tsx
import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

const PostRegister: React.FC = () => {
  return (
    <div style={{ color: "white", background: "#1e293b", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "2rem" }}>
      <img src={logo} alt="Logo" className="logo-spin" style={{ width: "450px", marginBottom: "2rem" }} />
      <h1>Please verify your email</h1>
      <p>Check your inbox and click the verification link before logging in.</p>
      <Link to="/login" style={{ color: "#60a5fa", textDecoration: "underline", marginTop: "1rem" }}>Back to Login</Link>
    </div>
  );
};

export default PostRegister;
