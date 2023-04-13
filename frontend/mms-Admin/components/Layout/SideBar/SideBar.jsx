import Link from "next/link";
import { useState } from "react";
import { Menu, Layout, Typography } from "antd";
import { Icon } from "components/Icon/Icon";

const SideBar = ({ user }) => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [state, setState] = useState({ name: "James", role: "Admin" });
  const { Sider } = Layout;
  const { Title, Paragraph } = Typography;

  return (
    <Sider className="sidebar-layout" width={250}>
      <Typography style={{ padding: "32px 55px" }}>
        <Title level={4} style={{ margin: 0 }}>
          Hi, {state?.name}
        </Title>
        <Paragraph>{state?.role}</Paragraph>
      </Typography>
      <Menu className="sidebar-menu">
        <Menu.Item
          key="1"
          className="sidebar-menu-item"
          icon={<Icon name="Profile" />}>
          <Link href="/profile">
            <a className="sidebar-link active">Profile</a>
          </Link>
        </Menu.Item>
        <Menu.Item
          key="2"
          className="sidebar-menu-item"
          icon={<Icon name="Dashboard" />}>
          <Link href="/dashboard">
            <a className="sidebar-link">Dashboard</a>
          </Link>
        </Menu.Item>
        <Menu.Item
          key="3"
          className="sidebar-menu-item"
          icon={<Icon name="Program" />}>
          <Link href="/profile">
            <a className="sidebar-link">Programs</a>
          </Link>
        </Menu.Item>
        <Menu.Item
          key="4"
          className="sidebar-menu-item"
          icon={<Icon name="Task" />}>
          <Link href="/profile">
            <a className="sidebar-link">Tasks</a>
          </Link>
        </Menu.Item>
        <Menu.Item
          key="5"
          className="sidebar-menu-item"
          icon={<Icon name="Report" />}>
          <Link href="/profile">
            <a className="sidebar-link">Reports</a>
          </Link>
        </Menu.Item>
        <Menu.Item
          key="6"
          className="sidebar-menu-item"
          icon={<Icon name="Mentor" />}>
          <Link href="/profile">
            <a className="sidebar-link">Mentors</a>
          </Link>
        </Menu.Item>
        <Menu.Item
          key="7"
          className="sidebar-menu-item"
          icon={<Icon name="MentorManager" />}>
          <Link href="/profile">
            <a className="sidebar-link">Mentor Managers</a>
          </Link>
        </Menu.Item>
        <Menu.Item
          key="8"
          className="sidebar-menu-item"
          icon={<Icon name="ApprovalRequest" />}>
          <Link href="/profile">
            <a className="sidebar-link">Approval Requests</a>
          </Link>
        </Menu.Item>
        <Menu.Item
          key="9"
          className="sidebar-menu-item"
          icon={<Icon name="Certificate" />}>
          <Link href="/profile">
            <a className="sidebar-link">Certificates</a>
          </Link>
        </Menu.Item>
        <Menu.Item
          key="10"
          className="sidebar-menu-item"
          icon={<Icon name="Message" />}>
          <Link href="/profile">
            <a className="sidebar-link">Messages</a>
          </Link>
        </Menu.Item>
        <Menu.Item
          key="11"
          className="sidebar-menu-item"
          icon={<Icon name="DiscussionForum" />}>
          <Link href="/profile">
            <a className="sidebar-link">Discussion Forum</a>
          </Link>
        </Menu.Item>
        <Menu.Item
          key="12"
          className="sidebar-menu-item"
          icon={<Icon name="Settings" />}>
          <Link href="/profile">
            <a className="sidebar-link">Settings</a>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SideBar;
