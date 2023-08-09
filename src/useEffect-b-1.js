import React, { useEffect, useState } from "react";

const Data = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("hello iam coming from useEffect", count);
  }, [count]);
  return (
    <div>
      <h1>useEffect</h1>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </div>
  );
};
export default Data;
