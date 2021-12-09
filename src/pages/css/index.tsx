/** @format */

import React from 'react';
import './index.scss';

function Test() {
  const handleClickParent = () => {
    console.log('parent');
  };

  return (
    <div className="container" onClick={handleClickParent}>
      <div className="child" />
    </div>
  );
}

export default Test;
