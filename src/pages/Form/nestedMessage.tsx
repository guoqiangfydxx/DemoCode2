import React from 'react';
import {
  Form, Input, InputNumber, Button,
} from 'antd';

// 简单的嵌套表单字段直接可以使用数组来解决，动态的就需要使用到Form.List
// Form.Item可以进行任何层级的嵌套，只有真正赋值了name的formItem才会被form进行统一的管理，所以在日常的开发中可以使用Form.Item进行多层级的嵌套
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

const Demo = () => {
  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <Form.Item
        name={['user', 'name']}
        label="Name"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'email']}
        label="Email"
        rules={[{ type: 'email' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'age']}
        label="Age"
        rules={[{ type: 'number', min: 0, max: 99 }]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item name={['user', 'website', 'remark']} label="Website">
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'introduction']} label="Introduction">
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default Demo;
