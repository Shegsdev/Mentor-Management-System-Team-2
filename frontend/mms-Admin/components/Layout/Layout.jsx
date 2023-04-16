import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import NavBar from "./NavBar/NavBar";
import SideBar from "./SideBar/SideBar";
import NavHeader from "components/NavHeader/NavHeader";
import { Layout } from "antd";

import { extractTitleFromUrl } from "utils/extractTitleFromUrl";

import styles from "styles/layout.module.css";

const AppLayout = ({ children }) => {
  const [headerTitle, setHeaderTitle] = useState("");
  const router = useRouter();
  const { Content } = Layout;

  useEffect(() => {
    let pathname = router?.pathname
    if(pathname === "/") setHeaderTitle("");
    else setHeaderTitle(extractTitleFromUrl(pathname?.slice(1)));
  }, [router]);

  return (
    <Layout className={styles.app_layout}>
      <NavBar />
      <Content>
        <Layout className={styles.app_layout}>
          <SideBar />
          <Content className={styles.app_layout_content}>
            <NavHeader title={headerTitle} />
            {children}
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};

export default AppLayout;
