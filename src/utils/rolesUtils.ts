export interface RoleInfo {
  name: string;
  color: string;
}

export const getRoleInfo = (role: number): RoleInfo => {
  switch (role) {
    case 0:
      return { name: "General", color: "#ff0000ff" };
    case 1:
      return { name: "Captain", color: "#15ff00ff" };
    case 2:
      return { name: "Soldier", color: "#facc15" };
    default:
      return { name: "Unknown", color: "#ffffff" };
  }
};
