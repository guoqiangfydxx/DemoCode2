/** @format */

import React, { useState } from 'react';
import { Button } from 'antd';
import Image from './index';
function Container() {
  const [images, setImages] = useState([
    'https://img2.baidu.com/it/u=1814268193,3619863984&fm=253&fmt=auto&app=138&f=JPEG?w=632&h=500',
    'https://img1.baidu.com/it/u=1407750889,3441968730&fm=253&fmt=auto&app=120&f=JPEG?w=1200&h=799',
    'https://img0.baidu.com/it/u=3155150237,2943070590&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500'
  ]);

  function handleClick1() {
    setImages([
      'https://img2.baidu.com/it/u=3382019668,1605723655&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
      'https://img0.baidu.com/it/u=3083734161,34720997&fm=253&fmt=auto&app=138&f=JPEG?w=713&h=500',
      'https://img1.baidu.com/it/u=3958038280,2264009540&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=334'
    ]);
  }

  function handleClick2() {
    setImages([
      'https://img2.baidu.com/it/u=712694738,3554631191&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=353',
      'https://img2.baidu.com/it/u=2143062845,671715699&fm=253&fmt=auto&app=138&f=JPEG?w=700&h=497',
      'https://img1.baidu.com/it/u=2085017318,1818001871&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=355'
    ]);
  }

  function handleLoad(src: string) {
    console.log('src>>', src);
  }

  return (
    <div>
      {images.map((image) => (
        <Image key={image} src={image} onLoad={handleLoad} />
      ))}

      <Button onClick={handleClick1}>测试切换1</Button>
      <Button onClick={handleClick2}>测试切换2</Button>
    </div>
  );
}

export default Container;
