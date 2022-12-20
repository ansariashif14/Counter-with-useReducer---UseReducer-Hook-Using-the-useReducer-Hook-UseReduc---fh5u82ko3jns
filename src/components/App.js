import React, { useReducer } from 'react'
import { counterReducer } from '../reducers/counterReducer';
import '../styles/App.css';
const App = () => {
  let initialValue=0;
const [state,dispatch] = useReducer(counterReducer,initialValue)
  return (
    <div id="main">
        <span id="counter">Count - {state}</span>
        <button id="increment-btn" onClick={()=>dispatch("INCREMENT")}>Increment</button>
        <button id="decrement-btn" onClick={()=>dispatch("DECREMENT")}>Decrement</button>
        <button onClick={()=>dispatch("RESET")}>Reset</button>
    </div>
  )
}


export default App;
