/** @format */

import React from 'react';
import { Prompt } from 'react-router-dom';
function TestPrompt() {
  return (
    <div>
      <p>test prompt</p>
      <Prompt message="Are you sure you want to leave?" />
    </div>
  );
}
export default TestPrompt;
