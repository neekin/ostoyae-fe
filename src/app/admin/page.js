import React from "react";
import { Button, ConfigProvider } from "antd";

import theme from "@/lib/themes/themeConfig";
import  PageLayout  from "./components/page-layout";
const HomePage = () => (
  <ConfigProvider theme={theme}>
    <PageLayout>
      <div className="App">
        <Button type="primary">Button</Button>
      </div>
    </PageLayout>
  </ConfigProvider>
);

export default HomePage;
