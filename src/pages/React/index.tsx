/** @format */

import React, { useState, memo, useMemo, useCallback } from 'react';

function SubCounter({ onClick, data }: any) {
  console.log('SubCounter render');
  return (
    <button type="button" onClick={onClick}>
      {data.number}
    </button>
  );
}
const SubCounterWrapper = memo(SubCounter);
function Counter6() {
  console.log('Counter render');
  const [name, setName] = useState('计数器');
  const [number, setNumber] = useState(0);
  const data = useMemo(() => ({
    number
  }), [number]);
  const addClick = useCallback(() => {
    setNumber(number + 1);
  }, []);
  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <SubCounterWrapper data={data} onClick={addClick} />
    </>
  );
}

export default Counter6;
