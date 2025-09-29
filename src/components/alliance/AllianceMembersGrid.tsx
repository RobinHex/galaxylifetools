import React from "react";
import { gridStyle } from "../../styles/AllianceStyles";
import { MemberCard } from "./AllianceComponents";
import { getRoleInfo } from "../../utils/rolesUtils";

interface Props {
  members: any[];
}

export const AllianceMembersGrid: React.FC<Props> = ({ members }) => (
  <div style={gridStyle}>
    {members.map((member) => {
      const roleInfo = getRoleInfo(member.AllianceRole);
      return <MemberCard key={member.Id} member={member} roleInfo={roleInfo} />;
    })}
  </div>
);
