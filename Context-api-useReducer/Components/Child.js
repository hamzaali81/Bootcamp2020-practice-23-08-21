import React, {useContext, useState} from 'react';
import Counter from '../ContextApi/counterContext';

const Child = ({children}) => {
    console.log({});
    const test = useContext(Counter); 
    console.log(test);
    return (
        <div>
           
           <h1>{test[0]}</h1>
            <button onClick={()=> test[1](++test[0])}>Add</button>
            
           
        </div>
    )
}

export default Child;
