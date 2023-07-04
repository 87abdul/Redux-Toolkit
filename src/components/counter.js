// import React, { useState } from 'react';
// import { increment, decrement, incrementByAmount } from '../reducers/counter';

// const Counter = ()=> {
//     const [count, setCount] = useState(0);
  
//     const decrement = () => {
//       setCount(count - 1);
//     };
  
//     const increment = () => {
//       setCount(count + 1);
//     };
  
//     const incrementByAmount = (amount) => {
//       setCount(count + amount);
//     };
  
//     return (
//       <div className="App">
//         <div>
//           <button onClick={decrement}>Decrement</button>
//           <button onClick={increment}>Increment</button>
//           <button onClick={() => incrementByAmount(5)}>Increment By 5</button>
//         </div>
//         <div>{count}</div>
//       </div>
//     );
//   }

//   export default Counter;




// Redux

import React, { useState } from 'react';
// import { increment, decrement, incrementByAmount } from '../reducers/counter';

 import { increment, decrement, incrementByAmount } from '../slices/counter';
import { useDispatch, useSelector } from 'react-redux';

const Counter = ()=> {
    // const [count, setCount] = useState(0);
  
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch();
    const amount = 5;
      
    return (
      <div className="App">
        <div>
          <button onClick={()=>dispatch(increment())}>Decrement</button>
          <button onClick={()=>dispatch(decrement())}>Increment</button>
          <button onClick={()=>dispatch(incrementByAmount(amount))}>Increment By 5</button>
        </div>
        <div>{count}</div>
      </div>
    );
  }

  export default Counter;

