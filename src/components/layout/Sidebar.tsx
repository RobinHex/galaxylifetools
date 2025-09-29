import React from "react";
import { Link } from "react-router-dom";
import LogoutButton from "../common/LogoutButton";
import SidebarFooter from "./SidebarFooter";
import "../../styles/Sidebar.css";

type MenuItem = {
  label: string;
  path?: string;
  children?: { label: string; path: string }[];
};

type SidebarProps = {
  items: MenuItem[];
};

const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  return (
    <aside className="sidebar">
      <h1 className="sidebar-title">Galaxy Life Tools</h1>
      <ul className="sidebar-menu">
        {items.map((item, index) => (
          <li key={index}>
            {item.children ? (
              <div>
                <span className="sidebar-link">{item.label}</span>
                <ul className="sidebar-submenu">
                  {item.children.map((child, i) => (
                    <li key={i}>
                      <Link to={child.path} className="sidebar-link">
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <Link to={item.path!} className="sidebar-link">
                {item.label}
              </Link>
            )}
          </li>
        ))}
         <LogoutButton />
      </ul>
        <SidebarFooter />
    </aside>
  );
};

export default Sidebar;
