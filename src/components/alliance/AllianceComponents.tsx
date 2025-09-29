import React from "react";
import { cardStyle } from "../../styles/AllianceStyles";
import { useNavigate } from "react-router-dom";

interface MemberCardProps {
  member: any;
  roleInfo: { name: string; color: string };
  Planets?: { X: number; Y: number; Name: string }[];
}

export const MemberCard: React.FC<MemberCardProps> = ({ member, roleInfo }) => {
   const navigate = useNavigate();
   const hasCoords = member.Planets?.some((p: any) => p.X !== 0 || p.Y !== 0) ?? false;
   const handleClick = () => {
    navigate(`/player/${encodeURIComponent(member.Name)}`);
      // verificar si el jugador tiene coordenadas válidas

  };
    return (
    <div
      onClick={handleClick}
    style={{
          ...cardStyle,
          background: hasCoords ? "red" : cardStyle.background,
          boxShadow: hasCoords
            ? "0 0 15px 2px rgba(255,0,0,0.7)"
            : undefined,
        }}
      onMouseEnter={(e) => {
        const target = e.currentTarget;
        target.style.transform = "scale(1.05)";
        target.style.boxShadow = "0 4px 15px rgba(0,0,0,0.5)";
      }}
      onMouseLeave={(e) => {
        const target = e.currentTarget;
        target.style.transform = "scale(1)";
        target.style.boxShadow = "none";
      }}
      title={`Role: ${roleInfo.name}\nWar Points: ${member.TotalWarPoints.toLocaleString()}`}
    >
      <img
        src={member.Avatar}
        alt={member.Name}
        style={{ width: "50px", borderRadius: "50%" }}
      />
      <p
        style={{
          fontWeight: "bold",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          maxWidth: "100%",
          margin: "0.25rem 0",
        }}
      >
        {member.Name}
      </p>
      <p>Level: {member.Level}</p>
      <p style={{ color: roleInfo.color, fontWeight: "bold" }}>{roleInfo.name}</p>
      <p>War Points: {member.TotalWarPoints.toLocaleString()}</p>
    </div>
  );
};
