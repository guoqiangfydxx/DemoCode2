import React, { Fragment } from "react";
import { Layout, BackTop } from "antd";
import { Route, Switch, Redirect } from "react-router-dom";
import GlobalHeader from "../components/GlobalHeader";
import GlobalFooter from "../components/GlobalFooter";
import SiderMenu from "../components/SiderMenu";
import { CopyrightOutlined } from "@ant-design/icons";
import Home from "../pages/home";
import Btn from "../pages/btn";
import BizChart from "../pages/Chat/bizcharts";
import Demo1 from "../pages/Form/demo1";
import "./index.scss";

const { Header, Content, Footer } = Layout;

class BasicLayout extends React.Component {
  state = {
    currentUser: {
      name: "测试",
      avatar:
        "https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png",
    },
    collapsed: false,
    isMobile: false,
  };

  componentDidMount() {}

  handleMenuCollapse = (collapsed: any) => {
    this.setState({
      collapsed: collapsed,
    });
  };

  handleMenuClick = () => {};

  render() {
    const { currentUser, isMobile: mb, collapsed } = this.state;

    const layout = (
      <Layout id="components-layout-demo-customr" className="project-container">
        <SiderMenu
          logo={null}
          collapsed={collapsed}
          isMobile={mb}
          onCollapse={this.handleMenuCollapse}
        />
        <Layout>
          <Header style={{ padding: 0 }}>
            <GlobalHeader
              logo={null}
              currentUser={currentUser}
              collapsed={collapsed}
              isMobile={mb}
              onCollapse={this.handleMenuCollapse}
              onMenuClick={this.handleMenuClick}
            />
          </Header>
          <Content
            style={{
              margin: "24px 24px 0",
              background: "#fff",
              height: "100%",
            }}
          >
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/btn" exact component={Btn} />
              <Route path="/chat" exact component={BizChart} />
              <Route path="/form1" exact component={Demo1} />
              <Redirect to="/" />
            </Switch>
          </Content>
          <Footer style={{ padding: 0 }}>
            <GlobalFooter
              copyright={
                <Fragment>
                  Copyright <CopyrightOutlined />
                </Fragment>
              }
            />
          </Footer>
          <BackTop visibilityHeight={100} />
        </Layout>
      </Layout>
    );

    return layout;
  }
}

export default BasicLayout;
