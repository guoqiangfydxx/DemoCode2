import React, { PureComponent } from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Sider } = Layout;
const { SubMenu } = Menu;

export default class SiderMenu extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      openKeys: ["sub1"],
      selectedKeys: ["1"],
    };
  }

  // submenu keys of first level
  rootSubmenuKeys = ["sub1", "sub2", "sub3"];

  onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(
      (key) => this.state.openKeys.indexOf(key) === -1
    );
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  };

  render() {
    const { collapsed, onCollapse } = this.props;
    const { openKeys } = this.state;

    const menuProps = collapsed ? {} : { openKeys };

    return (
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        breakpoint="lg"
        onCollapse={onCollapse}
      >
        <Menu
          theme="dark"
          mode="inline"
          {...menuProps}
          onOpenChange={this.onOpenChange}
          selectedKeys={this.state.selectedKeys}
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <span>Dashboard</span>
              </span>
            }
          >
            <Menu.Item key="1">
              <Link to="/home">首页</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <span>btn</span>
              </span>
            }
          >
            <Menu.Item key="2">
              <Link to="/btn">按钮</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub3"
            title={
              <span>
                <span>图标</span>
              </span>
            }
          >
            <Menu.Item key="3">
              <Link to="/chat">图标</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub4"
            title={
              <span>
                <span>表单</span>
              </span>
            }
          >
            <Menu.Item key="4">
              <Link to="/form1">普通表单</Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link to="/formList">FormList</Link>
            </Menu.Item>
            <Menu.Item key="6">
              <Link to="/classForm">classForm</Link>
            </Menu.Item>
            <Menu.Item key="7">
              <Link to="/requireMark">requireMark</Link>
            </Menu.Item>
            <Menu.Item key="8">
              <Link to="/nestedMessage">nestedMessage</Link>
            </Menu.Item>
            <Menu.Item key="9">
              <Link to="/form-provider">FormProvider</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    );
  }
}
