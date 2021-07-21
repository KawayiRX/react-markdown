import React from "react";
import { Layout } from "antd";
import { RouteTypes } from "config/routes";
import Slider from "components/menu";
import './index.less'

interface BasicLayoutProps {
  route: RouteTypes;
}

const { Content, Header } = Layout;

const BasicLayout: React.FC<BasicLayoutProps> = (props) => {

  const { children, route } = props;

  return (
    <Layout style={{ height: "100%" }}>
      <Header style={{ background: "#fff" }}><Slider routes={route.routes} /> </Header>
      <Layout>
        <Content
          style={{
            margin: "24px 16px",
            background: "#fff",
            padding: 24,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default BasicLayout;
