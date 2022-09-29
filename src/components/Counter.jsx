import { useState } from 'react';
import CounterDisplay from "./CounterDisplay";
import CounterButton from './CounterButton';
import './Counter.css'

export default function Counter({
    useIncrement,
    useDecrement,
    useMultiplyBy,
    useDivideBy,
    useCustomInput
}){
    const [count, setCount] = useState(0);

    const increment = () => setCount(prevState => prevState + 1);
    const decrement = () => setCount(prevState => prevState - 1);
    const multiplyBy = (num) => () => setCount(prevState => prevState * num);
    const divideBy = (num) => () => setCount(prevState => prevState / num);
    const setToCustomNum = (num) => () => setCount(num);

    return (
        <div className='counter'>
            <CounterDisplay>
                {count}
            </CounterDisplay>

            <div className="counter-controls">
                { useIncrement && <CounterButton handler={increment} name="Increment"/> }
                { useDecrement && <CounterButton handler={decrement} name="Decrement"/> }
                { useMultiplyBy && <CounterButton hasCustomNumber handler={multiplyBy} name="Multiply"/> }
                { useDivideBy && <CounterButton hasCustomNumber handler={divideBy} name="Divide"/> }
                { useCustomInput && <CounterButton hasCustomNumber handler={setToCustomNum} name="Custom"/> }
            </div>

        </div>
    )
}