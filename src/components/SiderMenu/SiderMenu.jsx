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
            <Menu.Item key="28">
              <Link to="/requireform">必填校验</Link>
            </Menu.Item>
            <Menu.Item key="29">
              <Link to="/input">输入框</Link>
            </Menu.Item>
            <Menu.Item key="35">
              <Link to="/formrender">表单渲染</Link>
            </Menu.Item>
            <Menu.Item key="36">
              <Link to="/formily">表单Formily</Link>
            </Menu.Item>
            <Menu.Item key="37">
              <Link to="/hookform">hoosk-form</Link>
            </Menu.Item>
            <Menu.Item key="38">
              <Link to="/rcform">rc-form</Link>
            </Menu.Item>
            <Menu.Item key="39">
              <Link to="/radio">radio</Link>
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
            <Menu.Item key="15">
              <Link to="/inputnumber">InputNumber</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub10"
            title={
              <span>
                <span>Hook</span>
              </span>
            }
          >
            <Menu.Item key="16">
              <Link to="/hook">Hook</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub11"
            title={
              <span>
                <span>NetWork</span>
              </span>
            }
          >
            <Menu.Item key="17">
              <Link to="/network">NetWork</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub12"
            title={
              <span>
                <span>date</span>
              </span>
            }
          >
            <Menu.Item key="18">
              <Link to="/date">date</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub13"
            title={
              <span>
                <span>吸顶</span>
              </span>
            }
          >
            <Menu.Item key="19">
              <Link to="/xiding">吸顶</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub14"
            title={
              <span>
                <span>测试</span>
              </span>
            }
          >
            <Menu.Item key="21">
              <Link to="/test">测试</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub15"
            title={
              <span>
                <span>定时器</span>
              </span>
            }
          >
            <Menu.Item key="22">
              <Link to="/interval">定时器</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub16"
            title={
              <span>
                <span>btn2</span>
              </span>
            }
          >
            <Menu.Item key="25">
              <Link to="/btn2">btn2</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub20"
            title={
              <span>
                <span>context</span>
              </span>
            }
          >
            <Menu.Item key="30">
              <Link to="/context">context</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub21"
            title={
              <span>
                <span>Rule</span>
              </span>
            }
          >
            <Menu.Item key="31">
              <Link to="/rule">rule</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub22"
            title={
              <span>
                <span>Canvas</span>
              </span>
            }
          >
            <Menu.Item key="32">
              <Link to="/canvas">canvas</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub23"
            title={
              <span>
                <span>DragLine</span>
              </span>
            }
          >
            <Menu.Item key="33">
              <Link to="/dragline">DragLine</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub24"
            title={
              <span>
                <span>prompt</span>
              </span>
            }
          >
            <Menu.Item key="34">
              <Link to="/prompt">Prompt</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub40"
            title={
              <span>
                <span>picker</span>
              </span>
            }
          >
            <Menu.Item key="40">
              <Link to="/picker">picker</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub41"
            title={
              <span>
                <span>zarm</span>
              </span>
            }
          >
            <Menu.Item key="41">
              <Link to="/zarm">zarm</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub42"
            title={
              <span>
                <span>crumb</span>
              </span>
            }
          >
            <Menu.Item key="42">
              <Link to="/crumb">crumb</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub43"
            title={
              <span>
                <span>rnd</span>
              </span>
            }
          >
            <Menu.Item key="43">
              <Link to="/rnd">rnd</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub44"
            title={
              <span>
                <span>排序</span>
              </span>
            }
          >
            <Menu.Item key="44">
              <Link to="/sort">sort</Link>
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
