import { useState } from 'react';

export default function CounterButton({hasCustomNumber: usesCustomNumber, handler, name}){
    const [customNum, setCustomNum] = useState(1);

    const onChange = (event) => setCustomNum(event.target.value);
    const onClick = usesCustomNumber ? handler(customNum) : handler;

    return (
        <div className='counter-control-container'>
            { usesCustomNumber && <input type="number" placeholder='Provide a number' onChange={onChange} /> }
            <button onClick={onClick}>{name}</button>
        </div>
    )
}
