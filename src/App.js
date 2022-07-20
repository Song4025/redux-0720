import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Box from "./component/Box";

function App() {
  let count = useSelector((state) => state.count);
  let id = useSelector((state) => state.id);
  let password = useSelector((state) => state.password);
  // const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const login = () => {
    dispatch({ type: "LOGIN", payload: { id: "song", password: "123" } });
  };
  const increaseCount = () => {
    dispatch({ type: "INCREMENT", payload: { num: 5 } });
    // setCount(count + 1);
  };
  const decreaseCount = () => {
    dispatch({ type: "DECREMENT", payload: { num: 5 } });
    // setCount(count - 1);
  };
  return (
    <div className="App">
      <h1>
        {id},{password}
      </h1>
      <button onClick={login}>로그인</button>
      <h1>{count}</h1>
      <button onClick={increaseCount}>증가</button>
      <Box />
      <button onClick={decreaseCount}>감소</button>
    </div>
  );
}

export default App;
