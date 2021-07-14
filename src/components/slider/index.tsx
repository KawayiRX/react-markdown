import React from "react";
import { Menu, Layout } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { RouteTypes } from "config/routes";
import "./index.css";

interface SliderType {
  routes?: RouteTypes[];
  collapsed?: boolean;
  store?: any;
}

const Slider: React.FC<SliderType> = (props) => {
  const { routes } = props;

  const renderMenuItem = (route: RouteTypes[]): any =>
    route
      .filter((item) => item.name && item.path)
      .map((item, index) => {
        if (item.routes && item.path && item.name) {
          return (
            <Menu.SubMenu
              key={item.path + item.name}
              title={
                <div>
                  <span>{item.name}</span>
                </div>
              }
            >
              {renderMenuItem(item.routes)}
            </Menu.SubMenu>
          );
        }
        return (
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={["1"]}
            key={item.path + item.name}
          >
            <Menu.Item icon={<UserOutlined />}>{item.name}</Menu.Item>
          </Menu>
        );
      });

  return (
    <Layout.Sider trigger={null} collapsible>
      <div className="logo" />
      {renderMenuItem(routes || [])}
    </Layout.Sider>
  );
};

export default Slider;
