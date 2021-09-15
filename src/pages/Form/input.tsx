/** @format */

import React, { useEffect, useState } from 'react';
import { Input } from 'antd';
function TestInput() {
  const [val, setVal] = useState('这是普通文本');
  const [style, setStyle] = useState({});

  function handleInputChange(e: any) {
    const { value } = e.target;
    setVal(value);
  }

  useEffect(() => {
    // const width = val.length * 12;
    // setStyle({
    //   width: `${width}px`
    //   // height: '60px'
    // });
    const node: any = document.getElementById('myInput');
    node.innerHTML = val;
    const { height, width } = node.getBoundingClientRect();
    setStyle({
      width: `${width}px`,
      height: `${height}px`
    });
  }, [val]);

  return (
    <div
      style={{
        margin: '0 auto ',
        width: '350px',
        border: '1px solid #ddd',
        height: '80vh'
      }}
    >
      <Input value={val} onChange={handleInputChange} />
      <div id="myInput" style={{ ...style }} contentEditable="true">
        {val}
      </div>
    </div>
  );
}
export default TestInput;
