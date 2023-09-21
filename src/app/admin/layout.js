import React from "react";
import { Inter } from "next/font/google";

import StyledComponentsRegistry from "@/lib/antd-registry";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "admin page",
  description: "Generated by create next app",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body className={inter.className}>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </body>
  </html>
);

export default RootLayout;
