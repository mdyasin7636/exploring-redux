// import { useContext } from "react";
// import { COUNTER_CONTEXT } from "../context/CounterContext";

import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByValue } from "../redux/features/counter/counterSlice";

// const Counter = () => {

//   const {count, setCount} = useContext(COUNTER_CONTEXT);
 
//   return (
//     <div className="flex shrink-0 p-10 m-10 gap-5 bg-gray-100 rounded-xl max-w-md justify-center items-center">
//       <button
//         onClick={() => setCount((prev) => prev - 1)}
//         className="bg-red-300 py-2 px-5 rounded-md"
//       >
//         Decrement
//       </button>
//       <h1>{count}</h1>
//       <button
//         onClick={() => setCount((prev) => prev + 1)}
//         className="bg-emerald-300 py-2 px-5 rounded-md"
//       >
//         Increment
//       </button>
//     </div>
//   );
// };

// export default Counter;


const Counter = () => {

  const {count} = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  console.log(count);

  return (
    <div>
      <button onClick={() => dispatch(incrementByValue(5))}>Increment By 5</button>
      <br />
      <button onClick={() => dispatch(increment())}>Increment</button>
      <div>
        <h1>{count}</h1>
      </div>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
