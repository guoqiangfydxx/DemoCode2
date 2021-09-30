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
import State from '../pages/state';
import Menu from '../pages/Menu';
import InputNumber from '../pages/inputNumber';
import Hook from '../pages/hooks';
import NetWork from '../pages/network';
import Date from '../pages/date';
import Xiding from '../pages/xiding';
import Test from '../pages/test';
import TestInterval from '../pages/hooks/interval';
import Btn2 from '../pages/btn/btn2';
import RequireForm from '../pages/Form/requireForm';
import Input from '../pages/Form/input';
import TestContext from '../pages/context';
import Rule from '../pages/rule';
import Canvas from '../pages/canvas';
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
              <Route path="/state" exact component={State} />
              <Route path="/menu" exact component={Menu} />
              <Route path="/inputnumber" exact component={InputNumber} />
              <Route path="/hook" exact component={Hook} />
              <Route path="/network" exact component={NetWork} />
              <Route path="/date" exact component={Date} />
              <Route path="/xiding" exact component={Xiding} />
              <Route path="/test" exact component={Test} />
              <Route path="/interval" exact component={TestInterval} />
              <Route path="/btn2" exact component={Btn2} />
              <Route path="/requireform" exact component={RequireForm} />
              <Route path="/input" exact component={Input} />
              <Route path="/context" exact component={TestContext} />
              <Route path="/rule" exact component={Rule} />
              <Route path="/canvas" exact component={Canvas} />
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
