/** @format */

import React, { useState } from 'react';
function Example2() {
  const [count, setCount] = useState(0);

  // 首先点击delay setCount，然后快速点击setCount这个按钮3次，这样的话可以看到这样一个效果：首先count从0快速增长到3，然后之后就从3变成了1
  const handleClick = () => {
    setTimeout(() => {
      setCount(count + 1);
    }, 3000);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)} type="button">
        setCount
      </button>
      <button onClick={handleClick} type="button">
        Delay setCount
      </button>
    </div>
  );
}
export default Example2;
