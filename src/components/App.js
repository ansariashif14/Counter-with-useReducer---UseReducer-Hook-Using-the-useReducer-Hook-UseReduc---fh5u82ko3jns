import React, { useReducer } from 'react'
import { counterReducer } from '../reducers/counterReducer';
import '../styles/App.css';
const App = () => {
const [count,dispatch] = useReducer(counterReducer,initialValue)
  return (
    <div id="main">
        <h1>Count - {count}</h1>
        <button onClick={()=>dispatch("INCREMENT")}>Increment</button>
        <button onClick={()=>dispatch("DECREMENT")}>Decrement</button>
        <button onClick={()=>dispatch("RESET")}>Reset</button>
    </div>
  )
}


export default App;
