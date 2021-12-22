/** @format */

import React, { useEffect, useState, useRef } from 'react';
import { Button } from 'antd';
import Child from './child';
function Parent() {
  const [count, setCount] = useState(0);
  const ref = useRef(0);
  const ref2 = useRef(0);

  function handleAdd() {
    setCount(count + 1);
  }

  useEffect(() => {
    ref2.current += 1;
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((count) => count + 1);
      ref.current += 1;
      if (ref.current > 20) {
        clearInterval(timer);
      }
    }, 1000);
  }, []);

  console.log('parent>>', ref2.current);
  return (
    <div>
      <Child count={count} />
      <Button onClick={handleAdd}>增加个数</Button>
    </div>
  );
}

export default Parent;
