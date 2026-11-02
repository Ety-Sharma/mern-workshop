import { useState } from "react";
import Ex01 from "./examples/Ex01_Hello.jsx";
import Ex02 from "./examples/Ex02_Props.jsx";
import Ex03 from "./examples/Ex03_State.jsx";
import Ex04 from "./examples/Ex04_Events.jsx";
import Ex05 from "./examples/Ex05_Lists.jsx";
import Ex06 from "./examples/Ex06_Forms.jsx";
import Ex07 from "./examples/Ex07_Effect.jsx";
import Ex08 from "./examples/Ex08_ConnectExpress.jsx";
import Ex09 from "./examples/Ex09_Crud.jsx";
import Ex10 from "./examples/Ex10_Lifting.jsx";
import Ex11 from "./examples/Ex11_Router.jsx";

const examples = [
  ["01 What React is", Ex01],
  ["02 JSX, components, props", Ex02],
  ["03 State", Ex03],
  ["04 Events and conditions", Ex04],
  ["05 Lists and keys", Ex05],
  ["06 Forms", Ex06],
  ["07 useEffect and fetching", Ex07],
  ["08 Connect to Express", Ex08],
  ["09 Add, update, delete", Ex09],
  ["10 Lifting state up", Ex10],
  ["11 React Router", Ex11],
];

export default function App() {
  const [index, setIndex] = useState(0);
  const Example = examples[index][1];

  return (
    <div style={{ fontFamily: "sans-serif", padding: 24, maxWidth: 640 }}>
      <label>
        Example:{" "}
        <select value={index} onChange={(e) => setIndex(Number(e.target.value))}>
          {examples.map(([name], i) => (
            <option key={name} value={i}>{name}</option>
          ))}
        </select>
      </label>
      <hr />
      <Example />
    </div>
  );
}
