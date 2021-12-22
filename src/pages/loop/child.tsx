/** @format */

import React, { useEffect, useState } from 'react';
import { Button } from 'antd';

function Child(props: any) {
  const { count, list = [] } = props;
  const [toggle, setToggle] = useState(false);
  console.log('child-render');

  useEffect(() => {
    console.log('sdhfksdhfdsjkfhdskjfhds');
    setToggle(!toggle);
  }, [list]);

  return (
    <div>
      <p>count的值为：{count}</p>
      <p>list: {JSON.stringify(list)}</p>
      <div>
        <Button onClick={() => setToggle(!toggle)}>toggle</Button>
      </div>
    </div>
  );
}
export default Child;
