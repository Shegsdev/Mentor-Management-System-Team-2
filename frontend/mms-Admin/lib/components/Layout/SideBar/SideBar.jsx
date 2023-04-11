import Link from "next/link";
import { useState } from "react";
import { Icon } from "lib/components/Icon/Icon";

export const SideBar = ({ user }) => {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <aside className="sidebar">
      <ul className="sidebar-nav">
        <li className="nav-item">
          <Link
            href="/modules/home"
            className={`${activeMenu === "home" ? "active" : ""}`}>
            <span className="nav-body">
              <span className="link-icon">
                <Icon name="Dashboard" />
              </span>
              <span className="link-text">Dashboard</span>
            </span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};
