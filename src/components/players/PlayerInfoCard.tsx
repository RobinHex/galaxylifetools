import React from "react";
import { formatNumber } from "../../utils/formatters";
import { getRoleInfo } from "../../utils/rolesUtils";
import PlanetsGrid from "./PlanetsGrid";

interface PlayerInfoCardProps {
  player: any;
}

export const PlayerInfoCard: React.FC<PlayerInfoCardProps> = ({ player }) => {
  return (
    <div
      style={{
        background: "#334155",
        padding: "1rem",
        borderRadius: "0.5rem",
        margin: "1rem auto",
        maxWidth: "800px",
        textAlign: "center",
      }}
    >
      <h2>{player.Name}</h2>
      <p><strong>Level:</strong> {player.Level}</p>

      <div style={{ display: "flex", justifyContent: "center", gap: "3rem", marginBottom: "1rem" }}>
        <p><strong>Alliance:</strong> {player.Alliance}</p>
        <p>
          <strong>Role:</strong>{" "}
          <span style={{ color: getRoleInfo(player.AllianceRole).color }}>
            {getRoleInfo(player.AllianceRole).name}
          </span>
        </p>
      </div>

      <p><strong>War Points:</strong> {formatNumber(player.TotalWarPoints)}</p>

      {player.Planets && (
        <>
          <h3>Planets</h3>
          <PlanetsGrid playerId={player.Id} planets={player.Planets} />
        </>
      )}
    </div>
  );
};
