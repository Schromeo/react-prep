import React, {useState} from 'react';

function Counter(){
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={increment}>Increase 1</button>
            <button onClick={decrement}>Decrease 1</button>
        </div>
    );
}

export default Counter;