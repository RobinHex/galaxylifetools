import { Link } from "react-router-dom";

const SidebarFooter: React.FC = () => {
  return (
   <div style={{
    padding: "1rem",
    fontSize: "1.2rem",
    color: "#94a3b8",
    textAlign: "center",
  }}
  >
      <Link to="/About" style={{ color: "#60a5fa", textDecoration: "none" }}>
        About
      </Link>
    </div>
  );
};

export default SidebarFooter;
