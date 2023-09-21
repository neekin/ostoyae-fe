"use client";
import React from "react";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,

  PieChartOutlined,
} from "@ant-design/icons";
import {  Menu } from "antd";
import Link from 'next/link'

// function getItem(label, key, icon, children, type) {
//   return {
//     key,
//     icon,
//     children,
//     label,
//     type,
//   };
// }
// const items = [
//   getItem("Option 1", "1", <PieChartOutlined />),
//   getItem("Option 2", "2", <DesktopOutlined />),
//   getItem("Option 3", "3", <ContainerOutlined />),
//   getItem("Navigation One", "sub1", <MailOutlined />, [
//     getItem("Option 5", "5"),
//     getItem("Option 6", "6"),
//     getItem("Option 7", "7"),
//     getItem("Option 8", "8"),
//   ]),
//   getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
//     getItem("Option 9", "9"),
//     getItem("Option 10", "10"),
//     getItem("Submenu", "sub3", null, [
//       getItem("Option 11", "11"),
//       getItem("Option 12", "12"),
//     ]),
//   ]),
// ];

export default function Menus() {

  return (
    <>

      <Menu
        mode="vertical"
        theme="dark"
      >

        <Menu.Item key='1'>
            <Link href='/admin'>Home</Link>
        </Menu.Item>
        <Menu.Item key='2'><Link href='/admin/1'>Page 1</Link></Menu.Item>
        <Menu.Item key='3'><Link href='/admin/2'>Page 2</Link></Menu.Item>
      </Menu>
    </>
  );
}
