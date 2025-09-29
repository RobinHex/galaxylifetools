import React from "react";
import { cardStyle } from "../../styles/AllianceStyles";

type MemberCardProps = {
  member: {
    Id: string;
    Name: string;
    Level: number;
    TotalWarPoints: number;
    Avatar: string;
    AllianceRole: number;
    Planets: { X: number; Y: number; Name: string }[];
  };
  roleInfo: {
    name: string;
    color: string;
  };
};


export const MemberCard: React.FC<MemberCardProps> = ({ member, roleInfo }) => {
  return (
    <div style={{ ...cardStyle }}>
      <img
        src={member.Avatar}
        alt={member.Name}
        style={{ width: "80px", height: "80px", borderRadius: "50%", marginBottom: "0.5rem" }}
      />
      <h4>{member.Name}</h4>
      <p>
        <strong>Level:</strong> {member.Level}
      </p>
      <p>
        <strong>War Points:</strong> {member.TotalWarPoints.toLocaleString()}
      </p>
      <p>
        <strong>Role:</strong> <span style={{ color: roleInfo.color }}>{roleInfo.name}</span>
      </p>
    </div>
  );
};
