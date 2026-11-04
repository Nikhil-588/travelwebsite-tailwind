import { useEffect, useState } from "react";

function Cleanup(){
    const [count,setcount]=useState(0);

     useEffect(()=>{
        const timer= setInterval(()=>{
            setcount((prev)=>prev+1);
        },1000)
       return ()=>clearInterval(timer);
     },[])
     
    return(
        <div>
           <h1>Welcome to clean up</h1>
           <p>{count}</p>
        </div>
    );
}
export default Cleanup;