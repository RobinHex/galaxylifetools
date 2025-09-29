import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";

const LogoutButton: React.FC = () => {
  const navigate = useNavigate();

const handleLogout = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    console.error("Error al cerrar sesión:", err);
  }
};
  return (
    <button
      onClick={handleLogout}
      style={{
        padding: "0.5rem 1rem",
        borderRadius: "0.5rem",
        border: "none",
        backgroundColor: "#ef4444",
        color: "white",
        cursor: "pointer",
        marginTop: "1rem",
      }}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
