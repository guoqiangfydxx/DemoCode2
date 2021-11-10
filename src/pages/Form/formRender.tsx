/** @format */

import React from 'react';
import { Button } from 'antd';
import FormRender, { connectForm } from 'form-render';

const schema = {
  type: 'object',
  properties: {
    checkbox1: {
      title: '展示更多内容',
      type: 'boolean'
    },
    select1: {
      title: '请假原因',
      type: 'string',
      enum: ['a', 'b', 'c'],
      enumNames: ['病假', '有事', '其它 (需注明具体原因)'],
      hidden: '{{formData.checkbox1 !== true}}',
      widget: 'radio'
    },
    input1: {
      title: '具体原因',
      type: 'string',
      format: 'textarea',
      hidden: '{{rootValue.checkbox1 !== true || formData.select1 !== "c"}}'
    }
  }
};

// const schema = {
//   type: 'object',
//   properties: {
//     listName2: {
//       title: '对象数组',
//       description: '对象数组嵌套功能',
//       type: 'array',
//       widget: 'virtualList',
//       itemProps: {
//         buttons: [
//           {
//             callback: 'hello',
//             text: '复制'
//           }
//         ]
//       },
//       items: {
//         type: 'object',
//         properties: {
//           input1: {
//             title: '简单输入框',
//             type: 'string',
//             required: true
//           },
//           input2: {
//             title: '简单输入框2',
//             type: 'string'
//           },
//           input3: {
//             title: '简单输入框3',
//             type: 'string'
//           },
//           select1: {
//             title: '单选',
//             type: 'string',
//             enum: ['a', 'b', 'c'],
//             enumNames: ['早', '中', '晚'],
//             widget: 'select'
//           }
//         }
//       }
//     }
//   }
// };

class Demo extends React.Component<any, any> {
  render() {
    const { form } = this.props;

    function handleSubmit() {
      console.log('values>', form.getValues());
    }

    return (
      <div>
        <FormRender form={form} schema={schema} />
        <Button type="primary" onClick={handleSubmit}>
          提交
        </Button>
      </div>
    );
  }
}

export default connectForm(Demo);
