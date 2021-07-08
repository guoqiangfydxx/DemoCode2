import React from 'react';
import {
  Form, Input, Button, Select,
} from 'antd';
import { FormInstance } from 'antd/lib/form';
// antd4的form在class组件中不再挂载到this.props上面了，目前的方法都是直接通过ref来获取对应的表单实例
const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

// function fixed(name: string | null): string {
//   // !操作符是一个类型断言操作符，就是告诉编辑器当前的变量不可能是null或者undefined，放心的执行后续的代码
//   function postfix(epithet: string) {
//     return `${name!.charAt(0)}.  the ${epithet}`; // ok
//   }
//   name = name || 'Bob';
//   return postfix('great');
// }

class Demo extends React.Component {
  formRef = React.createRef<FormInstance>();

  name = null;

  onGenderChange = (value: string) => {
    console.log('props>>>', this.props);
    switch (value) {
      case 'male':
        this.formRef.current!.setFieldsValue({ note: 'Hi, man!' });
        return;
      case 'female':
        this.formRef.current!.setFieldsValue({ note: 'Hi, lady!' });
        return;
      case 'other':
        this.formRef.current!.setFieldsValue({ note: 'Hi there!' });
        break;
      default:
        break;
    }
  };

  onFinish = (values: any) => {
    console.log(values);
  };

  onReset = () => {
    this.formRef.current!.resetFields();
  };

  onFill = () => {
    this.formRef.current!.setFieldsValue({
      note: 'Hello world!',
      gender: 'male',
    });
  };

  test = () => {
    console.log((this.name as any)!.toString);
  };

  render() {
    return (
      <Form
        {...layout}
        ref={this.formRef}
        name="control-ref"
        onFinish={this.onFinish}
      >
        <Form.Item name="note" label="Note" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
          <Select
            placeholder="Select a option and change input text above"
            onChange={this.onGenderChange}
            allowClear
          >
            <Option value="male">male</Option>
            <Option value="female">female</Option>
            <Option value="other">other</Option>
          </Select>
        </Form.Item>
        <Form.Item
          noStyle
          shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
        >
          {({ getFieldValue }) => (getFieldValue('gender') === 'other' ? (
            <Form.Item
              name="customizeGender"
              label="Customize Gender"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          ) : null)}
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={this.onReset}>
            Reset
          </Button>
          <Button type="link" htmlType="button" onClick={this.onFill}>
            Fill form
          </Button>
          <Button onClick={this.test}>test</Button>
        </Form.Item>
      </Form>
    );
  }
}
export default Demo;
