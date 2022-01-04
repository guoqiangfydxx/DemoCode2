/** @format */

import React, {
  Fragment,
  useCallback,
  useEffect,
  useState,
  useRef
} from 'react';
import {
  Button,
  DatePicker,
  Form,
  Input,
  Select,
  Table,
  InputNumber
} from 'antd';
import TestButton from './btn2';
import styles from './index.module.scss';

const { Column } = Table;
function TestBtn() {
  const [count, setCount] = useState(0);
  const [isCounter, setIsCounter] = useState(false);
  const timerRef = useRef<any>();

  const handleClick = useCallback(() => {
    timerRef.current = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (count >= 100) {
      clearInterval(timerRef.current);
    }
  }, [count]);

  function startCount() {
    setIsCounter(true);
    handleClick();
  }

  function handleClick1() {
    console.log('onclick');
  }

  function handleSubmit(values: any) {
    console.log('value>>>>', values);
  }

  return (
    <>
      <Button onClick={startCount}>Click me</Button>
      <p>
        you have clicked
        {count} times
      </p>
      <div className={styles.buttonBox}>
        <TestButton
          className={styles.btn}
          buttonName={
            isCounter ? (
              <span className={styles.btnText}>{`${count}%`}</span>
            ) : (
              '立即下载'
            )
          }
          onClick={handleClick1}
        >
          <span className={styles.test} style={{ width: `${count}%` }} />
        </TestButton>
      </div>
      <p className={styles.star}>*</p>
      <Button type="primary">测试主题色</Button>
      <Form onFinish={handleSubmit}>
        <Form.Item
          name="test1"
          label="测试1"
          rules={[
            {
              required: true,
              message: '测试1不能为空'
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="test2" label="测试2">
          <DatePicker />
        </Form.Item>
        <Form.Item name="test3" label="测试3" tooltip="jfk">
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item name="test4" label="测试4">
          <Select />
        </Form.Item>
        <Form.Item label="嵌套">
          <Form.Item name="test5">
            <Input />
          </Form.Item>
          <Form.Item name="test6">
            <Input />
          </Form.Item>
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit">提交</Button>
        </Form.Item>
      </Form>
      <p>
        中国共产党第十九届中央委员会第六次全体会议于11月8日至11日在北京召开，重点研究全面总结了党的百年奋斗的重大成就和历史经验问题。
      </p>
      <Button disabled>测试禁用文字</Button>
      <Button type="link">链接</Button>
      <a href="https://www.baidu.com">测试a链接</a>
      <div>
        <Table
          dataSource={[
            {
              name: '小明',
              tel: '1574483937839',
              gender: '男'
            },
            {
              name: '晓东',
              tel: '1574937839',
              gender: '女'
            },
            {
              name: '韩晨',
              tel: '15749378392',
              gender: '男'
            }
          ]}
          bordered
          rowKey="name"
          pagination={{
            total: 50,
            current: 1,
            pageSize: 10,
            showSizeChanger: true
          }}
        >
          <Column title="姓名" dataIndex="name" key="name" />
          <Column title="电话" dataIndex="tel" key="tel" />
          <Column title="性别" dataIndex="gender" key="gender" />
        </Table>
      </div>
      <div>
        <Input.Group compact>
          <span>前缀信息</span>
          <InputNumber />
        </Input.Group>
      </div>
    </>
  );
}
export default TestBtn;
