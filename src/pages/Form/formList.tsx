import { Form, Input, Button, Space } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

// 从目前来看，Form.List主要是用来解决动态增加删除表单的问题的，之前遇到此类问题虽然也是会使用到表单，但是总是会遇到一个index的问题，而现在直接利用Form.List基本上对于一些简单的动态表单的交互就已经足够了
const Demo = () => {
  const onFinish = (values: any) => {
    console.log("Received values of form:", values);
  };

  return (
    <Form name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
      <Form.List name="users">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, fieldKey, ...restField }) => (
              <Space
                key={key}
                style={{ display: "flex", marginBottom: 8 }}
                align="baseline"
              >
                <Form.Item
                  {...restField}
                  name={[name, "first"]}
                  fieldKey={[fieldKey, "first"]}
                  rules={[{ required: true, message: "Missing first name" }]}
                >
                  <Input placeholder="First Name" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, "last"]}
                  fieldKey={[fieldKey, "last"]}
                  rules={[{ required: true, message: "Missing last name" }]}
                >
                  <Input placeholder="Last Name" />
                </Form.Item>
                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add field
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Demo;
