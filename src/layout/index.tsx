/** @format */

import React, { Fragment } from 'react';
import { Layout, BackTop } from 'antd';
import { Route, Switch, Redirect } from 'react-router-dom';
import { CopyrightOutlined } from '@ant-design/icons';
import GlobalHeader from '../components/GlobalHeader';
import GlobalFooter from '../components/GlobalFooter';
import SiderMenu from '../components/SiderMenu';
import Home from '../pages/home';
import Btn from '../pages/btn';
import BizChart from '../pages/Chat/bizcharts';
import Demo1 from '../pages/Form/demo1';
import FormList from '../pages/Form/formList';
import ClassForm from '../pages/Form/classForm';
import RequireMark from '../pages/Form/requireMark';
import NestedMessage from '../pages/Form/nestedMessage';
import FormProvider from '../pages/Form/FormProvider';
import Scss from '../pages/scss';
import TestModal from '../pages/modal';
import Iframe from '../pages/iframe';
import './index.scss';

const { Header, Content, Footer } = Layout;

class BasicLayout extends React.Component {
  state = {
    currentUser: {
      name: '测试',
      avatar:
        'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png'
    },
    collapsed: false,
    isMobile: false
  };

  componentDidMount() {}

  handleMenuCollapse = (collapsed: any) => {
    this.setState({
      collapsed
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
              margin: '24px 24px 0',
              background: '#fff',
              height: '100%'
            }}
          >
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/btn" exact component={Btn} />
              <Route path="/chat" exact component={BizChart} />
              <Route path="/form1" exact component={Demo1} />
              <Route path="/formList" exact component={FormList} />
              <Route path="/classForm" exact component={ClassForm} />
              <Route path="/requireMark" exact component={RequireMark} />
              <Route path="/nestedMessage" exact component={NestedMessage} />
              <Route path="/form-provider" exact component={FormProvider} />
              <Route path="/scss" exact component={Scss} />
              <Route path="/modal" exact component={TestModal} />
              <Route path="/iframe" exact component={Iframe} />
              <Redirect to="/" />
            </Switch>
          </Content>
          <Footer style={{ padding: 0 }}>
            <GlobalFooter
              copyright={
                <>
                  Copyright
                  <CopyrightOutlined />
                </>
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
