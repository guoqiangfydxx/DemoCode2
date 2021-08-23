/** @format */

import React, { Component } from 'react';
import './index.scss';
class Xiding extends Component {
  state = {};

  // componentDidMount() {
  //   const head: any = document.querySelector('.header');
  //   document.addEventListener('scroll', () => {
  //     // console.log(document.documentElement.offsetTop) // 0 html距离顶部的距离
  //     // console.log(document.querySelector('.header').offsetHeight) // 40 红盒子的高度
  //     // console.log(window.scrollY) // 滚动的距离
  //     if (window.scrollY > head.offsetHeight) {
  //       head.classList.add('fixed');
  //     } else {
  //       head.classList.remove('fixed');
  //     }
  //   });
  // }

  render() {
    return (
      // <div className="wrap">
      //   <div className="header">我是即将吸顶的哦</div>
      //   <div className="main">主体内容</div>
      // </div>
      <div>
        {/* <header /> */}
        <div className="targetBox">sticky元素，吸顶元素</div>
        <footer />
      </div>
    );
  }
}
export default Xiding;
