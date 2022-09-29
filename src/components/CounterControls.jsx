import CounterButton from "./CounterButton";

export default function CounterControls({
    hasIncrement,
    hasDecrement,
    hasMultiplyBy,
    hasDivideBy,
    hasCustomInput,
    setCounterState
}){
    return (
        <div className="counter-controls">
            {hasIncrement && <CounterButton type="increment" onClick={() => setCounterState(prevState => prevState + 1)} />}
            {hasDecrement && <CounterButton type="decrement" onClick={() => setCounterState(prevState => prevState - 1)} />}
            {hasMultiplyBy && <CounterButton type="multiply" onClick={(num) => () => setCounterState(prevState => prevState * num)} />}
            {hasDivideBy && <CounterButton type="divide" onClick={(num) => () => setCounterState(prevState => prevState / num)} />}
            {hasCustomInput && <CounterButton type="custom" onClick={(num) => () => setCounterState(num)} />}
        </div>
    )
}
