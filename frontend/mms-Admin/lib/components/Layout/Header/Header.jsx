import { useState } from "react";
import Link from "next/link";
import { Icon } from "lib/components/Icon/Icon";
import { Badge } from "antd";

export const Header = () => {
  const recentNotifications = useState([]);

  const notificationCount = (count) => {
    if (count == 20) return "20+";
    else return count;
  };

  return (
    <header className="header">
      <h1>Logo</h1>

      <Link href="/home">
        <Badge count={notificationCount(recentNotifications?.length)}>
          <Icon name="Notification" />
        </Badge>
      </Link>
    </header>
  );
};
