/** @format */

import React, { useState } from 'react';
import cx from 'classnames';
import styles from './index.module.scss';
const list = [
  {
    name: 'singleSelect',
    value: '1',
    label: 'test1'
  },
  {
    name: 'singleSelect',
    value: '1',
    label: 'test2'
  },
  {
    name: 'singleSelect',
    value: '1',
    label: 'test3'
  },
  {
    name: 'singleSelect',
    value: '1',
    label: 'test4'
  },
  {
    name: 'singleSelect',
    value: '1',
    label: 'test5'
  }
];

function TestRadio() {
  const [mockList, setMockList] = useState(list);
  const [visible, setVisible] = useState(false);

  const handleChange = (e: any, index: number) => {
    const { value } = e.target;
    const copy = mockList.slice();
    copy[index].value = value;
    console.log('cipy', copy);
    setMockList([...copy]);
  };

  const handleAdd = () => {
    const copy = mockList.slice();
    copy.push({
      name: 'singleSelect',
      value: '1',
      label: `test${Math.round(Math.random() * 1000)}`
    });
    setMockList([...copy]);
  };

  const handleClick = () => {
    setVisible(true);
  };

  const getStyle = () => {
    if (!visible) {
      return {};
    }
    return {
      transform: 'translateX(-200px)'
    };
  };

  return (
    <div className={styles.container}>
      {mockList.map((item, index) => {
        const { value, name, label } = item;
        return (
          <div key={label}>
            <input
              type="radio"
              name={name}
              value={value}
              onChange={(e) => handleChange(e, index)}
            />
            <span>{label}</span>
          </div>
        );
      })}
      <span onClick={handleAdd}>添加</span>
      ===============================================
      {visible ? (
        <div>
          <div
            className={cx(styles.testContainer, { [styles.test1]: visible })}
          >
            <span className={styles.test} style={getStyle()}>
              测试
            </span>
          </div>
        </div>
      ) : null}
      <button onClick={handleClick} type="button">
        测试按钮
      </button>
    </div>
  );
}

export default TestRadio;
