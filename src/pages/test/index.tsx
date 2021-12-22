/** @format */

import React from 'react';
import moment from 'moment';
import { Form, Select } from 'antd';
import Img from './test.jpeg';
import './index.scss';
const { Option } = Select;
function Test() {
  // width = 20vw * num + 4vw * (num + 1)

  const handleSearch = () => {
    console.log('search');
  };

  return (
    <div className="test-box">
      <div className="test-header">
        <div className="image-container">
          <img src={Img} alt="图片" />
          <div className="play-num">1240W</div>
        </div>
        <div className="info">
          <div className="name">
            <p className="info-name">
              东京奥运会蹦床冠军朱雪莹在个人社交媒体上发文吐槽奖牌被抠掉一层皮
            </p>
            <span>关注</span>
          </div>
          <div className="title">
            多益网络悬赏千万送前CEO进监狱,女网红徒步西藏直播时遇难
          </div>
        </div>
      </div>
      <div className="intro">
        8月23日，东京奥运会蹦床冠军朱雪莹在个人社交媒体上发文吐槽奖牌被抠掉一层皮。有网友评论：你再抠抠兴许还能抠出巧克.8月23日，东京奥运会蹦床冠军朱雪莹在个人社交媒体上发文吐槽奖牌被抠掉一层皮。有网友评论：你再抠抠兴许还能抠出巧克.
      </div>
      <div className="footer">
        <span>122</span>
        <span>2.2W</span>
      </div>
      <div className="test-time">{moment('2021-08-24 16:34:43').fromNow()}</div>
      <div className="mask">
        <div className="mask-content">
          <div className="upload-image-box">
            <div className="upload-image-list">
              <span className="image-item" />
              <span className="image-item" />
              <span className="image-item" />
              {/* <span className="image-item" /> */}
              {/* <span className="image-item" /> */}
              {/* <span className="image-item" />
              <span className="image-item" /> */}
            </div>
          </div>
        </div>
      </div>
      <Form>
        <Form.Item name="test">
          <Select
            showSearch
            filterOption={false}
            onSearch={handleSearch}
            notFoundContent={null}
          />
        </Form.Item>
      </Form>
    </div>
  );
}
export default Test;
