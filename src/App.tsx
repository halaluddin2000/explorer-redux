import { decrement, increment } from "./redux/features/counter/counterSlice";

import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h1>Counct with Redux</h1>
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <br />
        <button>{count}</button>
        <br />
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
