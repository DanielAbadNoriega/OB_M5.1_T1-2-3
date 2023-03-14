import { useState } from "react";

const useCounter = () => {
  const [counter, setCounter] = useState(0);

  // Increment
  const increment = (value) => {
    setCounter(counter + value);
  };

  // Decrement
  const decrement = (value) => {
    setCounter(counter - value);
  };

  // Reset
  const resetCount = () => {
    setCounter(0);
  };

  return { counter, increment, decrement, resetCount };
};

export default useCounter;