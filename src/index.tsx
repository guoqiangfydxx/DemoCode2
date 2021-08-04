/** @format */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import 'moment/locale/zh-cn';
// import App from './App';
import App from './layout';
import reportWebVitals from './reportWebVitals';
import './index.less';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <ConfigProvider locale={zhCN} prefixCls="myAnt">
        <App />
      </ConfigProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
