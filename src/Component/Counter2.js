import {useReducer, useState} from "react";

function reducer(state, action){
    switch (action.type){
        case 'INCREMENT' :
            return { value : state.value + 1 };
        case 'DECREMENT' :
            return { value : state.value - 1 };
        default :
            return state;
    }
}

const Counter2 = () => {
    let [state, dispatch] = useReducer(reducer, {value : 0})
    return(
        <div>
            <p>현재 카운트 값은 <b>{state.value}</b>입니다.</p>
            <button onClick={() => dispatch({type : 'INCREMENT'})}>+</button>
            <button onClick={() => dispatch({type : 'DECREMENT'})}>-</button>
        </div>
    )
}

export default Counter2;