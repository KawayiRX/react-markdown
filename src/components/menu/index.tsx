import React from "react";
import { Menu } from "antd";
// import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { RouteTypes } from "config/routes";
import "./index.css";

interface SliderType {
  routes?: RouteTypes[];
  collapsed?: boolean;
  store?: any;
  mode?: 'horizontal' | 'inline'
}

const Slider: React.FC<SliderType> = (props) => {
  const { routes = [], mode = 'horizontal' } = props;

  const renderMenuItem = (route: RouteTypes[]): any =>
    route
      .filter((item) => item.name && item.path)
      .map((item) => {
        if (item.routes && item.path && item.name && mode === 'inline') {
          return (
            <Menu.SubMenu
              key={item.path}
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
          <Menu.Item key={item.path}>
            <Link to={item.path}>{item.name}</Link>
          </Menu.Item>
        );
      });

  return (
    // <Layout.Sider trigger={null} collapsible theme="light">
    // <div className="logo" />
    <Menu theme="light" mode={mode} defaultActiveFirst defaultSelectedKeys={[routes[0]?.path]}>
      {renderMenuItem(routes || [])}
    </Menu>
    // </Layout.Sider>
  );
};

export default Slider;
