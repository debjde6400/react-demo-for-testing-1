import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);

  return (
    <main>
      <div>
        <button onClick={() => setCount((prev) => prev + increment)}>+</button>

        <span style={{ margin: 10, fontSize: 40 }}>{count}</span>

        <button onClick={() => setCount((prev) => prev - increment)}>-</button>
      </div>

      <div style={{ marginTop: 5 }}>
        Enter input (Default 1) : &nbsp;
        <input
          type="number"
          onChange={(e) => setIncrement(parseInt(e.target.value || 1))}
        />
      </div>
    </main>
  );
};
