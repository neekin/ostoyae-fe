import React from "react";
import { Button, ConfigProvider } from "antd";

import theme from "@/lib/themes/themeConfig";

const HomePage = () => (
  <ConfigProvider theme={theme}>
    <div className="App">
      <Button type="primary">Button</Button>
    </div>
  </ConfigProvider>
);

export default HomePage;
