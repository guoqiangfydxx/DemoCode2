/** @format */

import React, { useState, useContext } from 'react';
function useCounter() {
  const [count, setCount] = useState(0);
  const decrement = () => setCount(count - 1);
  const increment = () => setCount(count + 1);
  return {
    count,
    setCount,
    decrement,
    increment
  };
}

const Counter = React.createContext<any>(null);
function CounterDisplay() {
  const counter = useContext(Counter);
  return (
    <div>
      <button onClick={counter.decrement} type="button">
        -
      </button>
      <p>
        you clicked
        <strong>{counter.count}</strong>
        times
      </p>
      <button onClick={counter.increment} type="button">
        +
      </button>
    </div>
  );
}

function App() {
  const counter = useCounter();
  return (
    <Counter.Provider value={counter}>
      <CounterDisplay />
    </Counter.Provider>
  );
}
export default App;
