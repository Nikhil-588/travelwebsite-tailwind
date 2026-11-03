import { useEffect, useState } from "react";

function Usetime(){
     const [date,setdate]=useState();
     const [time,settime]=useState();
    
     


    
useEffect(()=>{
     setInterval(()=>{
      const now=new Date();
    setdate(now.toLocaleDateString());
    settime(now.toLocaleTimeString());
     },1000);
},[])
    

    return(
        <div>
            <p>hello useeffect</p>
            <p>{date}-{time}</p>
        </div>
    );
}
export default Usetime;