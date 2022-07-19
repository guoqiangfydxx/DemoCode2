/** @format */

import { Input, Button } from 'antd';
import Form, { Field } from 'rc-field-form';
import React from 'react';
import WrapperInput from './wrapper';
import Radio from '../../Radio';
import Zarm from '../../zarm/three';

const Demo = () => {
  const [form] = Form.useForm();
  function handleValuesChange(info: any, values: any) {
    console.log('info', info, values);
  }

  function handleClick() {
    const errors = form.getFieldsError();
    console.log('errors', errors);
  }

  function test(_: any, value: any, callback: any) {
    if (value === 'apple') {
      callback('禁止选择苹果');
    }
    callback();
  }

  return (
    <Form
      onFinish={(values) => {
        console.log('Finish:', values);
      }}
      onFinishFailed={({ values, errorFields, outOfDate }) => {
        console.log('errorFields', errorFields);
      }}
      onValuesChange={handleValuesChange}
      form={form}
    >
      <Field
        name="username"
        rules={[{ required: true, message: '姓名不能为空' }]}
      >
        <WrapperInput />
      </Field>
      <Field
        name="phone"
        rules={[
          { required: true, message: '电话不能为空' },
          {
            transform: (value) => value.replace(/5/g, '*')
          }
        ]}
      >
        <Input />
      </Field>
      <Field
        name="password"
        rules={[{ required: true, message: '密码不能为空' }]}
      >
        <Input placeholder="Password" />
      </Field>
      <Field
        name="gender"
        rules={[{ required: true, message: '水果不能为空' }]}
      >
        <Radio.Group
          options={[
            { label: '苹果3', value: 'apple' },
            { label: '橘子2', value: 'orange' },
            { label: '香蕉1', value: 'banan' }
          ]}
          label="水果"
        >
          {/* <Radio value="apple">苹果</Radio>
          <Radio value="orange">橘子</Radio>
          <Radio value="banana">香蕉</Radio> */}
        </Radio.Group>
      </Field>
      <Field name="zarm" rules={[{ validator: test }]}>
        <Zarm />
      </Field>

      <button type="submit">Submit</button>
    </Form>
  );
};

export default Demo;
