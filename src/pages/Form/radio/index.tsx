/** @format */

import React from 'react';
const Demo = () => {
  function handleChange(e: any) {
    console.log('e>>>>', e);
    console.log('val', e.target.value);
  }

  return (
    <div>
      <p>Select a maintenance drone:</p>

      <div>
        <input
          type="radio"
          id="huey"
          name="drone"
          value="huey"
          onChange={handleChange}
        />
        <label htmlFor="huey">Huey</label>
      </div>

      <div>
        <input
          type="radio"
          id="dewey"
          name="drone"
          value="dewey"
          onChange={handleChange}
        />
        <label htmlFor="dewey">Dewey</label>
      </div>

      <div>
        <input
          type="radio"
          id="louie"
          name="drone"
          value="louie"
          onChange={handleChange}
        />
        <label htmlFor="louie">Louie</label>
      </div>
    </div>
  );
};
export default Demo;
