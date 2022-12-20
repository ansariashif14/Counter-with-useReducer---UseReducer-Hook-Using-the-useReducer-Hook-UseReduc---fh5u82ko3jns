import React, { useReducer } from 'react'
import { counterReducer , initialState} from '../reducers/counterReducer';
import '../styles/App.css';
//let initialValue=0;
const App = () => {
const [state,dispatch] = useReducer(counterReducer,initialState)
  return (
    <div id="main">
        <h1>{state}</h1>
        <button onClick={()=>dispatch("INCREMENT")}>Increment</button>
        <button onClick={()=>dispatch("DECREMENT")}>Decrement</button>
    </div>
  )
}


export default App;
