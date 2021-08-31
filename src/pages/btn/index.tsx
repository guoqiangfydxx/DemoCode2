/** @format */

import React, {
  Fragment,
  useCallback,
  useEffect,
  useState,
  useRef
} from 'react';
import { Button } from 'antd';
import TestButton from './btn2';
import styles from './index.module.scss';

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
    </>
  );
}
export default TestBtn;
