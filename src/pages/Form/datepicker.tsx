/** @format */

import React, { useEffect, useRef, useState } from 'react';
import { DatePicker, Input } from 'antd';
import styles from './index.module.scss';
const { RangePicker } = DatePicker;
function Test() {
  const ref1 = useRef<any>();
  const ref2 = useRef<any>();
  const [isShowPanel, setIsShowPanel] = useState(false);
  const [value, setValue] = useState<string>();

  function handleClick() {
    ref1.current.focus();
    console.log('ref1>>>>>', ref1.current);
    setIsShowPanel(true);
  }

  useEffect(() => {
    ref2.current.addEventListener(
      'click',
      (event: any) => {
        console.log('event>>>>', event);
        setIsShowPanel(false);
      },
      false
    );
  }, []);

  function handleChange(dates: any) {
    console.log('dates>>>>', dates);
    if (dates.length === 2) {
      setIsShowPanel(false);
      setValue(
        `${dates[0].format('YYYY-MM-DD')}-${dates[1].format('YYYY-MM-DD')}`
      );
    }
  }

  return (
    <div className={styles.container} ref={ref2}>
      <RangePicker
        className={styles.datePicker}
        ref={ref1}
        open={isShowPanel}
        onChange={handleChange}
      />
      <Input
        className={styles.input}
        readOnly
        onClick={handleClick}
        placeholder="请选择日期"
        value={value}
      />
    </div>
  );
}
export default Test;
