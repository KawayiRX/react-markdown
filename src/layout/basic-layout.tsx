import React from "react";
import { Layout } from "antd";
import { RouteTypes } from "config/routes";
import Slider from "components/slider";

interface BasicLayoutProps {
  route: RouteTypes;
}

const { Content } = Layout;

const BasicLayout: React.FC<BasicLayoutProps> = (props) => {
  const { children, route } = props;
  return (
    <Layout style={{ height: "100%" }} className="layout">
      <Slider routes={route.routes} />
      <Layout className="site-layout">
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default BasicLayout;
