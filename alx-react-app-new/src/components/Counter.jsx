import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return(
        <div>
            <p>Current Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <button onClick={() => setCount(count - 1)}>Decrement Count</button>
            <button onClick={() => setCount(0)}>Reset Count</button>
        </div>
    )
}

export default Counter;