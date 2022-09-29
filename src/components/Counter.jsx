import { useState } from 'react'
import CounterDisplay from "./CounterDisplay";
import CounterControls from "./CounterControls";
import './Counter.css'

export default function Counter({
    hasIncrement,
    hasDecrement,
    hasMultiplyBy,
    hasDivideBy,
    hasCustomInput
}){
    const [count, setCount] = useState(0);

    return (
        <div className='counter'>
            <CounterDisplay>
                {count}
            </CounterDisplay>
            <CounterControls 
                setCounterState={setCount} 
                hasIncrement={hasIncrement}
                hasDecrement={hasDecrement}
                hasMultiplyBy={hasMultiplyBy}
                hasDivideBy={hasDivideBy}
                hasCustomInput={hasCustomInput} />
        </div>
    )
}