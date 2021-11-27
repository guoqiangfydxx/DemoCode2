/** @format */

import { Input } from 'antd';
import React from 'react';
const Wrapper = (props: any) => {
  console.log('props>>>>', props);
  return <Input width="100%" placeholder="请输入" {...props} />;
};
export default Wrapper;
