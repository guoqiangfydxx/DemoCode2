/** @format */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import 'moment/locale/zh-cn';
import App from './layout';
import reportWebVitals from './reportWebVitals';
import { ConfirmProdiver, defaultGetPrefix } from './util';
import Context from './pages/context';
// import './index.less';

ReactDOM.render(
  // <BrowserRouter>
  //   <React.StrictMode>
  //     <ConfigProvider locale={zhCN} prefixCls="myAnt">
  //       {/* <ConfirmProdiver value={{ getPrefixCls: defaultGetPrefix }}> */}
  //       <App />
  //       {/* </ConfirmProdiver> */}
  //     </ConfigProvider>
  //   </React.StrictMode>
  // </BrowserRouter>,
  <Context />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
