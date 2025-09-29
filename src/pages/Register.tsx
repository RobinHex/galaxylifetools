// src/pages/Register.tsx
import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useRegister } from "../hooks/useRegister";
import { SearchInput } from "../components/common/SearchInput";
import { SearchButton } from "../components/common/SearchButton";
import Spinner from "../components/common/Spinner";
import logo from "../logo.svg";
import { AuthContext } from "../context/AuthContext";

const Register: React.FC = () => {
  const navigate = useNavigate();
  const { setIsRegistering } = useContext(AuthContext)!;

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { handleRegister, loading, error } = useRegister();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const user = await handleRegister(email, username, password, confirmPassword);

    if (user) {
      setIsRegistering(false);
      navigate("/post-register");
    }
  };

  return (
    <div style=
    {{ color: "white",
     background: "#1e293b",
      minHeight: "100vh",
       padding: "2rem", display: "flex",
        justifyContent: "center",
         alignItems: "center"
         }}>
      <div style={{ maxWidth: "450px", width: "100%", display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}>
        <h1 className="page-title">Galaxy Life Tools</h1>
        <img src={logo} alt="Logo" className="logo-spin" />
        <h1 className="page-subtitle">Register</h1>

        <form
          onSubmit={onSubmit}
          style={{
            maxWidth: "450px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <SearchInput placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <SearchInput placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <SearchInput placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <SearchInput placeholder="Confirm Password" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

          {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

          <SearchButton
            type="submit"
            label={loading ? "Registering..." : "Register"}
            style={{ width: "76%" }}
          />
        </form>

        {loading && <Spinner size={60} />}

        <p style={{ textAlign: "center", width: "85%", margin: 0 }}>
          Already have an account?{" "}
          <Link to="/login" style={{ color: "#60a5fa", textDecoration: "underline" }}>
            Log in here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
