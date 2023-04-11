import { Header } from "./Header/Header";
import { SideBar } from "./SideBar/SideBar";
import { Main } from "./Main/Main";
import ProfileIcon from "lib/assets/images/profile.svg";
import { Input, Row, Col, Layout, Menu, Space } from "antd";

const AppLayout = ({ children }) => {
  const { Header, Content } = Layout;
  const { Search } = Input;
  const { SubMenu } = Menu;
  return (
    <div>
      <Header />
      <SideBar />
      <Main>
        <Layout>
          <Header>
            <Row justify="space-between">
              <Col span={8}>
                <Space direction="horizontal" size={10}>
                  <span className="logo">MMS</span>
                  <img src={""} alt="mms logo" />
                </Space>
              </Col>
              <Col span={8}>
                <Row justify="end">
                  <Col span={4}>
                    <div>Icon</div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Header>
          {/* container below */}
          <Layout>
            <Menu
              mode="inline"
              theme="light"
              width="100%"
              className="site-layout-sider-menu">
              <Menu.Item
                key="People"
                className="site-layout-sider-menu-item"
                icon={
                  <img
                    src={ProfileIcon}
                    className="site-layout-menu-icon"
                    alt="people icon"
                  />
                }>
                People
              </Menu.Item>
            </Menu>
            <Content className="site-layout-content">{children}</Content>
          </Layout>
        </Layout>
      </Main>
    </div>
  );
};

export default AppLayout;
