"use client";
import React, { useState } from "react";
import { Layout, Button, Breadcrumb, Tabs } from "antd";
const { Header, Footer, Sider, Content } = Layout;
import Menus from "./menus";
// import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { PageContainer } from "@ant-design/pro-components";
import TabPages  from './tabs'
export default function PageLayout({ children }) {
  const headerStyle = {
    color: "#fff",
    height: 64,
  };
  const contentStyle = {
    minHeight: "calc(100vh - 133px)",

    // color: "#fff",
    background: "#fff",
  };
  const siderStyle = {
    color: "#fff",
    // paddingTop:64,
    // overflow: 'auto',
    // height: '100vh',
    // position: 'fixed',
    // left: 0,
    // top: 0,
    // bottom: 0,
    // backgroundColor:"#FAE4D3"
  };
  const footerStyle = {
    color: "#000",
  };

  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Layout>
      <Header style={headerStyle}>后台</Header>
      <Layout>
        <Sider
          style={siderStyle}
          collapsible
          collapsed={collapsed}
          onCollapse={toggleCollapsed}
        >
          <Menus />
        </Sider>
        <Layout>
          <Content style={contentStyle}>
            <Tabs
              hideAdd
 
            />
            <TabPages/>
            {children}
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2023 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
}
