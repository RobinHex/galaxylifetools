import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, AuthContext } from "./context/AuthContext";
import Sidebar from "./components/layout/Sidebar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Alliance from "./pages/Alliance";
import PostRegister from "./pages/PostRegister";
import SearchPlayer from "./pages/SearchPlayer";
import About from "./pages/About";
import Spinner from "./components/common/Spinner";

const AppRoutes: React.FC = () => {

  const { user, loading } = useContext(AuthContext)!;

  if (loading) {return <Spinner />;}

// Si no hay usuario logeado, mostramos login o register según la ruta
  if (!user) {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
         <Route path="/post-register" element={<PostRegister />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    );
  }


  // Menú principal para usuarios logeados
  const menuItems = [
    { label: "Alliance", path: "/alliance" },
    { label: "Search player", path: "/player" },
  ];

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar items={menuItems} />
      <div
        style={{
          marginLeft: "220px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          backgroundColor: "#1e293b",
          color: "white",
          padding: "1rem",
        }}
      >
        <Routes>
          <Route path="/" element={<Navigate to="/alliance" />} />
          <Route path="/alliance" element={<Alliance />} />
          <Route path="/player/:name?" element={<SearchPlayer />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Alliance />} />
        </Routes>
      </div>

    </div>

  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;
