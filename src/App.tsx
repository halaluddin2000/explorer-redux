import { useDispatch } from "react-redux";
import { decrement, increment } from "./redux/features/counter/counterSlice";

function App() {
  const dispatch = useDispatch();

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
        <button>0</button>
        <br />
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
