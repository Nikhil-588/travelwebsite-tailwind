import { useEffect, useState } from "react";
//import { data } from "react-router-dom";

function NotFetchapi(){
    const [dataapi,setdataapi]=useState([]);
    
    
        useEffect(()=>{
            document.title=`USEEFFECT`;
        fetch("/use.json")
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data);
            setdataapi(data);
        })
        .catch((error)=>console.log(error));
},[])

    return(
        <div>
           <h1>data</h1>
           {dataapi.map((item)=>{
            return(
                <li key={item.id}>
                  <p>{item.id}</p>
                    <p>{item.location}</p>
                </li>
            )
           })}
        </div>
    );
}
export default NotFetchapi;