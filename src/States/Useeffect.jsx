import { useEffect, useState } from "react";

function Useeffect(){
    const [add,setadd]=useState(0);
    useEffect(()=>{
        console.log("hello");
    },[add])
    return(
        <div>
           <p>count:{add}</p>
           <button onClick={()=>setadd(add+1)}>increment</button>
        </div>
    );
}
export default Useeffect;
