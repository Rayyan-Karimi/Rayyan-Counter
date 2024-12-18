import "./App.css";
import { useState } from "react";

function Hero() {
  return (
    <div className="py-6 text-center shadow-lg">
      <h2>Counter</h2>
    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(0);
  const [counter, setCounter] = useState(1);
  // const changeCounter = (value) => {
  //   setCounter(parseInt(value));
  // }
  return (
    <div className="py-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold">{count}</h1>
      <div className="buttons flex">
        <button
          className="btn btn-primary m-2 py-1 px-2 rounded-md bg-slate-100 border-gray-800 border-[1px]"
          onClick={() => setCount(count - counter)}
        >
          -
        </button>
        <button
          className="btn btn-primary m-2 py-1 px-2 rounded-md bg-slate-100 border-gray-800 border-[1px]"
          onClick={() => setCount(count + counter)}
        >
          +
        </button>
      </div>
      <div className="counter-setter my-4">
        <span>Increment/Decrement by</span>
        <input
          type="number"
          className="bg-white border-gray-800 border-[1px] w-16 ml-2"
          value={counter}
          onChange={(e) => setCounter(parseInt(e.target.value))}
        ></input>
      </div>
      <div className="reset-btn">
        <button
          className="m-2 py-1 px-2 rounded-md bg-slate-100 border-gray-800 border-[1px]"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
function App() {
  return (
    <div>
      <Hero></Hero>
      <Counter></Counter>
    </div>
  );
}

export default App;
