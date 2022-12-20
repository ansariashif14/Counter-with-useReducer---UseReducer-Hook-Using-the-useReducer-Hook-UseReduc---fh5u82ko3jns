const counterReducer = (state,action) =>{
  let initialState=0;
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
export {counterReducer}
