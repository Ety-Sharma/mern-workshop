// 03 STATE
// State is a component's memory.
// useState returns [value, setter]. Calling the setter updates the value AND redraws the screen.
// Never change state directly (count++ does nothing visible).

import { useState } from "react";

export default function Ex03() {
  const [count, setCount] = useState(0);        // 0 is the starting value

  return (
    <div>
      <h2>Clicked {count} times</h2>
      <button onClick={() => setCount(count + 1)}>Add one</button>{" "}
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
