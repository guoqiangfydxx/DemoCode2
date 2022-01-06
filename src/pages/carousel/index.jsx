/** @format */

// index.jsx
import React, { useRef, useState } from 'react';
import { useInterval } from 'ahooks';
import './index.scss';

function test() {
  const arr = [];
  for (let i = 0; i < 50; i++) {
    arr.push(`${i}: 跑马灯滚动起来……`);
  }
  return arr;
}

function Marquee() {
  return (
    <div className="marquee-root">
      <div className="marquee-content">
        {test().map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
}
export default Marquee;
