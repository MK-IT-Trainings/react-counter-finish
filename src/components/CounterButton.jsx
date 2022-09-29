import { useState } from 'react';

export default function CounterButton({type, onClick}){
    const [divideByNum, setDivideByNum] = useState(1);
    const [multiplyByNum, setMultiplyByNum] = useState(1);
    const [customNum, setCustomNum] = useState(1);

    switch(type){
        case 'increment': {
            return <button onClick={onClick}>Increment</button>
        }   

        case 'decrement': {
            return <button onClick={onClick}>Decrement</button>
        }  

        case 'multiply': {
            return (
                <div className="counter-control-container">
                    <input type="number" placeholder='Provide a number' onChange={(event) => {setMultiplyByNum(event.target.value)}} />
                    <button onClick={onClick(multiplyByNum)}>Multiply</button>
                </div>
            )
        }   

        case 'divide': {
            return (
                <div className="counter-control-container">
                    <input type="number" placeholder='Provide a number' onChange={(event) => {setDivideByNum(event.target.value)}} />
                    <button onClick={onClick(divideByNum)}>Divide</button>
                </div>
            )
        }    

        case 'custom': {
            return (
                <div className="counter-control-container">
                    <input type="number" placeholder='Provide a number' onChange={(event) => {setCustomNum(event.target.value)}} />
                    <button onClick={onClick(customNum)}>Set Counter</button>
                </div>
            )
        }

        default: {
            throw new Error('Please provide a valid type')
        }
    }
}
