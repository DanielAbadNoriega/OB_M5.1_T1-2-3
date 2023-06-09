import { useState } from "react";

const useCounter = () => {
  const [counter, setCounter] = useState(10);

  // Increment
  const increment = (value) => {
    if (counter <= 50) setCounter(counter + value);
  };

  // Decrement
  const decrement = (value) => {
    if (counter >= -50) setCounter(counter - value);
  };

  // Reset
  const resetCount = () => {
    setCounter(0);
  };

  return { counter, increment, decrement, resetCount };
};

export default useCounter;
