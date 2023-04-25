import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Layout, Menu, Typography } from "antd";
import { Icon } from "components/Icon/Icon";
import { SidebarMenu } from "components/SidebarMenu";

import { clsx } from "clsx";
import styles from "styles/sidebar.module.scss";

const SideBar = ({ user }) => {
  const router = useRouter();
  const [state, setState] = useState({ name: "James", role: "Admin" });
  const [activeMenu, setActiveMenu] = useState("");

  const { Sider } = Layout;
  const { Paragraph } = Typography;

  useEffect(() => {
    const pathname = router.pathname?.split('/')[1];
    setActiveMenu(pathname)
  }, [router.pathname]);

  return (
    <Sider
      className={styles.sidebar_layout}
      style={{ background: "#f7feff" }}
      width={250}
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={() => {}}
      onCollapse={(collapsed, type) => {}}>
      <Typography className={styles.welcome_text_header}>
        <p className={styles.welcome_text}>
          Hi, {state?.name}
        </p>
        <Paragraph>{state?.role}</Paragraph>
      </Typography>
      <Menu
        className={styles.sidebar_menu}>
        {SidebarMenu.map((menu, idx) => (
          <Menu.Item
            key={`${idx}`}
            className={clsx(styles.item, menu.path.match(activeMenu) ? styles.active : "")}
            icon={<Icon name={`${menu.icon}`} />}>
            <Link href={`${menu.path}`}>
              <a className={styles.link}>{menu.name}</a>
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
};

export default SideBar;
