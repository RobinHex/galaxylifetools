import { CSSProperties } from "react";

export const inputStyle: CSSProperties = {
  padding: "1rem 1.5rem",
  borderRadius: "1rem",
  border: "2px solid #3b82f6",
  backgroundColor: "#0f172a",
  color: "white",
  outline: "none",
  fontWeight: "bold",
  fontSize: "1.1rem",
  transition: "all 0.3s ease-in-out",
  width: "300px",
  boxShadow: "0 0 10px rgba(59,130,246,0.5)",
};

export const buttonStyle: CSSProperties = {
  padding: "1rem 2rem",
  background: "linear-gradient(135deg, #3b82f6, #2563eb)",
  color: "white",
  border: "none",
  borderRadius: "1rem",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "1.1rem",
  boxShadow: "0 0 15px rgba(59,130,246,0.5), 0 4px 15px rgba(0,0,0,0.5)",
  transition: "all 0.3s ease-in-out",
};

export const cardStyle: CSSProperties = {
  background: "#1e293b",
  padding: "0.5rem",
  borderRadius: "0.5rem",
  textAlign: "center",
  position: "relative",
  transition: "transform 0.2s, box-shadow 0.2s",
  cursor: "pointer",
  overflow: "hidden",
};

export const gridStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
  gap: "4rem",
  justifyContent: "center",
  alignItems: "start",
  marginTop: "1rem",
  marginBottom: "2rem",
  padding: "2rem 2rem",
  background: "#0f172a",
  borderRadius: "2.5rem",
  boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
  maxWidth: "calc(80vw - 20px)",
  marginLeft: "auto",
  marginRight: "auto",
};
