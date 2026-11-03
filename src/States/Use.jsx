import { useState } from "react";

function Use(){
    const [count,setcount]=useState(0);
    const [step , setstep]=useState(0);
    function countadd(){
        setcount(count+step);
    }
   
    return(
        <div>
          <h1>Welcome to use state</h1>
          <p>{count}</p>
          <div>
            <p>step: </p><input  type="number" value={step} onChange={(e)=>setstep(Number(e.target.value))}/>
          </div>
          <button onClick={countadd}>Increment</button>
          <button onClick={()=>setcount(count-step)}>Decrement</button>
          <button onClick={()=>setcount(0)}>reset</button>
        </div>
    );
}
export default Use;