import React, { useEffect, useState } from 'react';
import {
  Form, Input, Checkbox, Button,
} from 'antd';
// 如果component设置为false的话，那么最外层的form节点就会消失，只有里面的formItem会展示在界面中
// htmlType的button点击也是在onFieldsChange里面的，但是其不会触发valuesChange，所以相对来说valuesChange监听表单域的改变是更加可靠的
// 原本的每一个FormItem都是用col包裹起真正的input或者select的，但是现在当设置noStyle之后就只会纯展示里面的input或者Select，外层的包裹样式都被去除掉了
// modal弹框中有表单的话，最简易的处理方式就是在表单验证之后将表单值传递给父组件对应的函数，而不是
// 在表单内部直接来解决这个问题；但是如果整个弹框在很多地方都使用到的话，反而将其处理数据放在内部是更加合理的
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
function Demo() {
  const [form] = Form.useForm();
  const [initialData] = useState({
    remember: true,
    username: 'tom',
    password: 'sdf',
  });

  useEffect(() => {
    // setInitialData({
    //   remember: false,
    //   username: "chnage-tom",
    //   password: "4223",
    // });
  }, []);

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  function handleReset() {
    form.resetFields();
  }

  function handleFieldsChange(changedFields: any, allFields: any) {
    console.log('field>>', changedFields, allFields);
  }

  function handleValuesChange(changedValues: any, allValues: any) {
    console.log('values>>', changedValues, allValues);
  }

  console.log('ini', initialData);
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={initialData}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      form={form}
      requiredMark
      onFieldsChange={handleFieldsChange}
      onValuesChange={handleValuesChange}
      validateMessages={validateMessages}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true }]}
        extra="输入框的字不能超过30个"
        hasFeedback
        messageVariables={{ label: 'good' }}
        noStyle={false}
        shouldUpdate
      >
        <Input />
      </Form.Item>

      <Form.Item
        hidden={false}
        label="Password"
        name="password"
        rules={[{ required: true }]}
        messageVariables={{ another: 'good' }}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      {/* // 这种老的更新方式看起来是不起作用了 */}
      {/* {getFieldValue("remember") === true ? (
        <Form.Item name="age" label="年龄">
          <Input />
        </Form.Item>
      ) : null} */}

      <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) => prevValues.remember !== currentValues.remember}
      >
        {({ getFieldValue }) => (getFieldValue('remember') === true ? (
          <Form.Item name="age" label="年龄">
            <Input />
          </Form.Item>
        ) : null)}
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button onClick={handleReset}>重置</Button>
      </Form.Item>
    </Form>
  );
}
export default Demo;
