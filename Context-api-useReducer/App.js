import React, {useState} from 'react';
import Child from './Components/Child';
import Counter from './ContextApi/counterContext';
import Child02 from './Components/Child02/Child02';



const App = () => {
  const countState = useState(0)
  return (
    <Counter.Provider value={countState}>
    <div>
      <Child name='hamza'/>
      <Child02 />
    </div>
    </Counter.Provider>
  )
}

export default App
