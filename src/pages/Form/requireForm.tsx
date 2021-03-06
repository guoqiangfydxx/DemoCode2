/** @format */

import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import Radio from '../Radio';

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 }
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 }
};

const DynamicRule = () => {
  const [form] = Form.useForm();
  // const [checkNick, setCheckNick] = useState(false);

  // useEffect(() => {
  //   form.validateFields(['nickname']);
  // }, [checkNick]);

  const onCheckboxChange = () => {
    // setCheckNick(e.target.checked);
    form.validateFields(['nickname']);
  };

  const onCheck = async () => {
    try {
      const values = await form.validateFields();
      console.log('Success:', values);
    } catch (errorInfo) {
      console.log('Failed:', errorInfo);
    }
  };

  return (
    <Form form={form} name="dynamic_rule">
      <Form.Item
        {...formItemLayout}
        name="username"
        label="Name"
        rules={[
          {
            required: true,
            message: 'Please input your name'
          }
        ]}
      >
        <Input placeholder="Please input your name" />
      </Form.Item>
      <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) =>
          prevValues.checked !== currentValues.checked
        }
      >
        {({ getFieldValue }) => (
          <Form.Item
            {...formItemLayout}
            name="nickname"
            label="Nickname"
            rules={[
              {
                required: getFieldValue('checked') === true,
                message: 'Please input your nickname'
              }
            ]}
          >
            <Input placeholder="Please input your nickname" />
          </Form.Item>
        )}
      </Form.Item>
      <Form.Item {...formTailLayout} name="checked" valuePropName="checked">
        <Checkbox onChange={onCheckboxChange}>Nickname is required</Checkbox>
      </Form.Item>
      <Form.Item {...formTailLayout} name="gender">
        <Radio.Group
          options={[
            { label: '??????3', value: 'apple' },
            { label: '??????2', value: 'orange' },
            { label: '??????1', value: 'banan' }
          ]}
        >
          {/* <Radio value="apple">??????</Radio>
          <Radio value="orange">??????</Radio>
          <Radio value="banana">??????</Radio> */}
        </Radio.Group>
      </Form.Item>
      <Form.Item {...formTailLayout}>
        <Button type="primary" onClick={onCheck}>
          Check
        </Button>
      </Form.Item>
    </Form>
  );
};
export default DynamicRule;
