import React, { useState } from "react";
import styles from "./index.module.less";
import { Layout, Menu, Tooltip } from "antd";
import { Link } from "react-router-dom";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
} from "@ant-design/icons";
import { formatMessage } from "../../components/locales";

const { Header, Content, Footer, Sider } = Layout;
const HomePage: React.FC = ({ children }) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  return (
    <Layout style={{ minHeight: "100vh", width: "100%" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(isOpen) => setCollapsed(isOpen)}
      >
        {" "}
        <Tooltip placement="right" title={"公众号：前端要努力"}>
          <div className={styles.logo}>{formatMessage({ id: "frontEnd" })}</div>
        </Tooltip>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="11" icon={<PieChartOutlined />}>
            <Link to={"/doc"}>文档</Link>
          </Menu.Item>
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            <Link to={"/icon"}>图标</Link>
          </Menu.Item>
          <Menu.SubMenu key="sub2" icon={<DesktopOutlined />} title="组件">
            <Menu.Item key="5">
              <Link to={"/custom"}>远程搜索框</Link>
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.Item key="9" icon={<FileOutlined />}>
            <Link to={"/locale"}> 国际化搭建</Link>
          </Menu.Item>
          <Menu.Item key="10" icon={<FileOutlined />}>
            <Link to={"/public"}> 复杂form&table组件</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "0 16px" }}>{children}</Content>
        <Footer style={{ textAlign: "center" }}>
          vite-react-template ©2021 Created by 公众号：前端要努力
          ；微信号843655240
        </Footer>
      </Layout>
    </Layout>
  );
};

export default HomePage;