"use client";
import React, { useState } from "react";
import { Layout, Button, Breadcrumb } from "antd";
const { Header, Footer, Sider, Content } = Layout;
import Menus from "./menus";
// import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
export default function PageLayout({ children }) {
  const headerStyle = {
    color: "#fff",
    height: 64,
  };
  const contentStyle = {
    minHeight: "calc(100vh - 214px)",
   
    color: "#fff",
    background: '#fff',
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
        <Layout
          style={{
            padding: "0 24px 24px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content style={contentStyle}>{children}</Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2023 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
}
