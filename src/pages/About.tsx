import React from "react";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  return (
    <div
      style={{
        padding: "2rem",
        color: "white",
        maxWidth: "800px",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
        lineHeight: 1.6,
      }}
    >
      <h1 style={{ marginBottom: "1rem", textAlign: "center" }}>About Galaxy Life Tools</h1>

      <section style={{ marginBottom: "2rem" }}>
        <h2>Disclaimer / Terms of Use</h2>
        <p>
          Galaxy Life Tools is a **support tool** designed solely to assist players in managing
          their gameplay experience. It is intended for educational and organizational purposes
          only.
        </p>
        <ul>
          <li>
            This application <strong>does not promote cheats, hacks, exploits, or any malicious
            software</strong> that interferes with the integrity of Galaxy Life.
          </li>
          <li>
            No <strong>monetary compensation, donations, or economic benefits</strong> are
            collected through this application.
          </li>
          <li>
            All data and features provided are for <strong>personal tracking and alliance
            organization</strong> within the game.
          </li>
          <li>
            Users accept that the developers are <strong>not responsible for account issues,
            suspensions, or bans</strong> resulting from misuse of external information.
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2>Purpose</h2>
        <p>
          The main goal of Galaxy Life Tools is to enhance the player experience through:
        </p>
        <ul>
          <li>Tracking alliance members and their stats.</li>
          <li>Organizing planets and colonies efficiently.</li>
          <li>Visualizing personal and alliance-level statistics.</li>
        </ul>
        <p>
          The use of this tool is entirely <strong>voluntary</strong> and emphasizes transparency,
          safety, and respect within the Galaxy Life community.
        </p>
      </section>

      <div style={{ textAlign: "center", marginTop: "3rem" }}>
        <Link
          to="/"
          style={{
            color: "#60a5fa",
            textDecoration: "none",
            fontWeight: "bold",
            border: "1px solid #60a5fa",
            padding: "0.5rem 1rem",
            borderRadius: "0.5rem",
            transition: "all 0.3s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#60a5fa")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default About;
