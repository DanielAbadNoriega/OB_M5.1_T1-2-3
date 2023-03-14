import React from "react";
import useCounter from "../../hooks/useCounter";

const Counter = () => {
  const { counter, increment, decrement, resetCount } = useCounter();

  return (
    <div className="container my-2 p-1 card border-0 shadow-sm">
      <div className="card-header">
        <div className="card-title text-center">
          <h3 className="text-secondary fw-bold">Counter</h3>
        </div>
      </div>
      <div className="card-body text-center d-flex justify-content-center">
        <p className="m-0 rounded shadow-sm w-50">{counter}</p>
      </div>
      <div className="card-footer d-flex justify-content-around">
        <button
          className="btn btn-success btn-lg-success me-1"
          onClick={() => increment(1)}
        >
          INCREMENT +1
        </button>
        <button
          className="btn btn-warning btn-lg-warning me-1"
          onClick={() => decrement(1)}
        >
          DECREMENT -1
        </button>
        <button className="btn btn-danger btn-lg-danger" onClick={resetCount}>
          RESET
        </button>
      </div>
    </div>
  );
};

export default Counter;
