import React, { PureComponent } from "react";
import { Menu, Spin, Dropdown, Avatar, Divider } from "antd";
import { LogoutOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'

import "./index.scss";

export default class GlobalHeader extends PureComponent {
  toggle = () => {
    const { collapsed, onCollapse } = this.props;

    onCollapse(!collapsed);
  };

  render() {
    const {
      currentUser = {},
      collapsed,
      isMobile,
      logo,
      onMenuClick
    } = this.props;

    const menu = (
      <Menu className="menu" selectedKeys={[]} onClick={onMenuClick}>
        <Menu.Item key="logout">
        <LogoutOutlined />退出登录
        </Menu.Item>
      </Menu>
    );

    // const noticeData = this.getNoticeData();

    return (
      <div className="globalHeader">
        {isMobile && [
          <div className="header-logo" key="logo">
            <img src={logo} alt="logo" width="26" key="logo" />
          </div>,
          <Divider type="vertical" key="line" />
        ]}
        <span onClick={this.toggle}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </span>
        
        <div className="right">
          {currentUser.name ? (
            <Dropdown overlay={menu}>
              <span className="action account">
                <Avatar
                  size="small"
                  className="avatar"
                  src={currentUser.avatar}
                />
                <span className="name">{currentUser.name}</span>
              </span>
            </Dropdown>
          ) : (
            <Spin size="small" style={{ marginLeft: 8 }} />
          )}
        </div>
      </div>
    );
  }
}
