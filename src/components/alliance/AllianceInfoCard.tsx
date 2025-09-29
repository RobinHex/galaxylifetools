import React from "react";
import { cardStyle } from "../../styles/AllianceStyles";
import { formatNumber, formatBoolean } from "../../utils/formatters";

interface Props {
  data: any;
  opponentName: string | null;
  onOpponentClick: (name: string) => void;
}

export const AllianceInfoCard: React.FC<Props> = ({ data, opponentName, onOpponentClick }) => (
  <div style={{ ...cardStyle, maxWidth: "800px", margin: "0 auto" }}>
    <h3>{data.Name}</h3>
    <p>{data.Description}</p>
    <p>
      <strong>Level:</strong> {data.AllianceLevel} | <strong>War Points:</strong> {formatNumber(data.WarPoints)}
    </p>
    <p>
      <strong>Wars Won:</strong> {formatNumber(data.WarsWon)} | <strong>Wars Lost:</strong> {formatNumber(data.WarsLost)}
    </p>
   <p>
      <strong>In War:</strong> {formatBoolean(data.InWar)} |{" "}
      <strong>Opponent:</strong>{" "}
      {opponentName ? (
        <span
          onClick={() => onOpponentClick(opponentName)}
          style={{ color: "#60a5fa", textDecoration: "underline", cursor: "pointer" }}
        >
          {opponentName}
        </span>
      ) : (
        "N/A"
      )}
    </p>
  </div>
);
