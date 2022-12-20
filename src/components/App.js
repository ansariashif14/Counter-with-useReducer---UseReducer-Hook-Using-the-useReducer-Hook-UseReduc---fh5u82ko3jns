import React, { useReducer } from 'react'
import { counterReducer , initialState} from '../reducers/counterReducer';
import '../styles/App.css';
//let initialValue=0;
const App = () => {
const [state,dispatch] = useReducer(counterReducer,initialState)
  return (
    <div id="main">
        <h1 id="counter">{state}</h1>
        <button id="increment-btn" onClick={()=>dispatch("INCREMENT")}>Increment</button>
        <button id="decrement-btn" onClick={()=>dispatch("DECREMENT")}>Decrement</button>
    </div>
  )
}


export default App;
