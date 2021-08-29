/** @format */

import React, { useState, useRef, useEffect } from 'react';
import { Button } from 'antd';
function TestInterval() {
  const [downloadPrecent, setDownLoadPrecent] = useState<Map<string, number>>(
    new Map()
  );
  const [downLoadStatus, setDownLoadStatus] = useState<Map<string, number>>(
    new Map()
  );
  const [isStartDownLoad, setIsStartDownLoad] = useState<Map<string, boolean>>(
    new Map()
  );
  const [num, setNum] = useState(0);
  const count = useRef<number>(1);

  function handleClick() {
    setInterval(() => {
      downloadPrecent.set(`${count.current}`, count.current + 1);
      downLoadStatus.set(`${count.current}`, count.current + 2);
      isStartDownLoad.set(`${count.current}`, true);
      setDownLoadPrecent(new Map(downloadPrecent));
      setDownLoadStatus(new Map(downLoadStatus));
      setIsStartDownLoad(new Map(isStartDownLoad));
      count.current++;
    }, 3000);
  }

  useEffect(() => {
    console.log('mount');
    setInterval(() => {
      downloadPrecent.set(`${count.current}`, count.current + 1);
      downLoadStatus.set(`${count.current}`, count.current + 2);
      isStartDownLoad.set(`${count.current}`, true);
      setDownLoadPrecent(new Map(downloadPrecent));
      setDownLoadStatus(new Map(downLoadStatus));
      setIsStartDownLoad(new Map(isStartDownLoad));
      count.current++;
    }, 5000);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setNum((num) => num + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  console.log('downloadPrecent', downloadPrecent);
  console.log('downLoadStatus', downLoadStatus);
  console.log('isStartDownLoad', isStartDownLoad);
  return (
    <div>
      <span>定时器测试</span>
      <Button onClick={handleClick}>测试</Button>
      <p>num的值为：{num}</p>
    </div>
  );
}
export default TestInterval;
