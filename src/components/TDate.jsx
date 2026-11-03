import { useState } from "react";

function TDate(){
    const [time,settime]=useState();

    setInterval(()=>{
        const now=new Date();
        const ntime=now.toLocaleTimeString();
        const ndate=now.toLocaleDateString();
        settime(`${ndate}-${ntime}`);
    },1000)
    return(
        <div>
            <p>{time}</p>
        </div>
    );
}
export default TDate;