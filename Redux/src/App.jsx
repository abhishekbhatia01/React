import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incByfive,
} from "./features/counter/counterSlice";
function App() {
  const [num, setNum] = React.useState(5);
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  return (
    <div>
      <h1>{count}</h1>

      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
      <hr />

      <input
        type="number"
        value={num}
        onChange={(e) => {
          setNum(Number(e.target.value));
        }}
      />
      <button
        onClick={() => {
          dispatch(incByfive(num));
        }}
      >
        Increase by amount
      </button>
    </div>
  );
}

export default App;
