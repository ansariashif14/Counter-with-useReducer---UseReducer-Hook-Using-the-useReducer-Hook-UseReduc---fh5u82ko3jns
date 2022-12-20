let initialState=0;
const counterReducer = (state,action) =>{
  
  switch(action)
  {
    case "INCREMENT":
      return state+1;
    case "DECREMENT":
      return state-1;
    default:
      return initialState;
  }
}
export {counterReducer, initialState}
