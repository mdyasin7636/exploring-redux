import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByValue } from '../../feature/Counter/CounterSlice'

const Counter = () => {

    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()

    return (
        <div>
            <button onClick={() => dispatch(incrementByValue(10))}>Increment</button>
            <br />
            <button onClick={() => dispatch(increment())}>Increment</button>
            <br />
            <p>{count}</p>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    );
};

export default Counter;