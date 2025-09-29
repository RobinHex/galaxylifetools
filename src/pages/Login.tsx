import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import { SearchInput } from "../components/common/SearchInput";
import { SearchButton } from "../components/common/SearchButton";
import Spinner from "../components/common/Spinner";
import logo from "../logo.svg";
import { AuthContext } from "../context/AuthContext";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { setIsRegistering } = useContext(AuthContext)!;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { handleLogin, loading, error } = useLogin();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const user = await handleLogin(email, password);

    if (user) {
      setIsRegistering(false);
      navigate("/dashboard");
    }
  };

  return (
    <div
      style={{
        color: "white",
        background: "#1e293b",
        minHeight: "100vh",
        padding: "2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: "450px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        <h1 className="page-title">Galaxy Life Tools</h1>
        <img src={logo} alt="Logo" className="logo-spin" />
        <h1 className="page-subtitle">Login</h1>

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
          <SearchInput
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <SearchInput
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error &&
          <p style={{ color: "red", textAlign: "center" }}>{
            error.includes("verify")?
            (<>{error}<br /><small>Check your inbox or spam folder.</small></>) : (error)}
          </p>}

          <SearchButton
            type="submit"
            label={loading ? "Logging in..." : "Login"}
            style={{ width: "76%" }}
          />
        </form>

        {loading && <Spinner size={60} />}

        <p style={{ textAlign: "center", width: "85%", margin: 0 }}>
          Don’t have an account?{" "}
          <Link
            to="/register"
            style={{ color: "#60a5fa", textDecoration: "underline" }}
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
