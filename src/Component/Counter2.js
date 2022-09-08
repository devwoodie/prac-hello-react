import {useState} from "react";

const Counter2 = () => {
    let [count, setCount] = useState(0);
    return(
        <div>
            <p>현재 카운트 값은 <b>{count}</b>입니다.</p>
            <button onClick={() => {setCount(count + 1)}}>+</button>
            <button onClick={() => {setCount(count - 1)}}>-</button>
        </div>
    )
}

export default Counter2;