import React, {useReducer} from 'react';
import { counterReducer } from '../../Reducer/reducer';

const Child02 = () => {
    const [state, dispatch] = useReducer(counterReducer, 0 )
    console.log(state);
    return (
        <div>
            <h1>Value {state}</h1>
            <button onClick={()=> dispatch('ADD')}>Add</button>
        </div>
    )
}

export default Child02;
