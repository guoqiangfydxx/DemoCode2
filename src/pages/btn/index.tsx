import React, { Fragment, useCallback, useState } from 'react';
import { Button } from 'antd';

function TestBtn() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  return (
    <>
      <Button onClick={handleClick}>Click me</Button>
      <p>
        you have clicked
        {count}
        {' '}
        times
      </p>
    </>
  );
}
export default TestBtn;
