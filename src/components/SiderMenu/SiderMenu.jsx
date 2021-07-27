/** @format */

import React, { PureComponent } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const { Sider } = Layout;
const { SubMenu } = Menu;

class SiderMenu extends PureComponent {
  // submenu keys of first level
  rootSubmenuKeys = ['sub1', 'sub2', 'sub3'];

  constructor(props) {
    super(props);

    this.state = {
      openKeys: ['sub1'],
      selectedKeys: ['1']
    };
  }

  onOpenChange = (openKeys) => {
    const { openKeys: tempKeys } = this.state;
    const latestOpenKey = openKeys.find((key) => tempKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : []
      });
    }
  };

  render() {
    const { collapsed, onCollapse } = this.props;
    const { openKeys, selectedKeys } = this.state;

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
          selectedKeys={selectedKeys}
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
          <SubMenu
            key="sub5"
            title={
              <span>
                <span>Scss</span>
              </span>
            }
          >
            <Menu.Item key="10">
              <Link to="/scss">scss</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            title={
              <span>
                <span>弹框</span>
              </span>
            }
          >
            <Menu.Item key="11">
              <Link to="/modal">弹框</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub6"
            title={
              <span>
                <span>iframe</span>
              </span>
            }
          >
            <Menu.Item key="12">
              <Link to="/iframe">iframe</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub7"
            title={
              <span>
                <span>state</span>
              </span>
            }
          >
            <Menu.Item key="13">
              <Link to="/state">State</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub8"
            title={
              <span>
                <span>Menu</span>
              </span>
            }
          >
            <Menu.Item key="14">
              <Link to="/menu">Menu</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub9"
            title={
              <span>
                <span>InputNumber</span>
              </span>
            }
          >
            <Menu.Item key="14">
              <Link to="/inputnumber">InputNumber</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    );
  }
}
SiderMenu.propTypes = {
  collapsed: PropTypes.bool,
  onCollapse: PropTypes.func
};
export default SiderMenu;
