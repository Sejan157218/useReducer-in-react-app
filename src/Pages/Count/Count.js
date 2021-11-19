import React,{useReducer} from 'react';


const InitialState={
    count: 0
}

const Reducer =(state, action)=>{
    switch (action.type) {
        case 'increment':
          return {count: state.count + 1};
        case 'decrement':
          return {count: state.count - 1}
          break;
       
        default:
          break;
      }
}
const Count = () => {
    const [state, dispatch] = useReducer(Reducer, InitialState);
   
    return (
        <>
      <h1>Count: {state.count}</h1>
     
      <button onClick={() => dispatch({type: 'increment'})}>Increase</button>
      <button onClick={() => dispatch({type: 'decrement'})}>Decrease</button>
    </>
    );
};

export default Count;