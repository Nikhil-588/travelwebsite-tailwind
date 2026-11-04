import { useEffect, useState } from "react";

function Useeffect1(){
    const [count,setcount]=useState(0);
    useEffect(()=>{
        document.title=`Nikhil`;
    },[]);
    return(
        <div>
          <h1>use effect</h1>
          <p>count:{count}</p>
          <button onClick={()=>setcount(count+1)}>Increment</button>
        </div>
    );
}
export default Useeffect1;