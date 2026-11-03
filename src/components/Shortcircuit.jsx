import { useState } from "react";

function Shortcircuit(){

    const [IsLoggedIn,setIsLoggedIn]=useState("");
    const [user,setuser]=useState("");

    return(
        <div>
           <h1>Welcome to the short circuit Evaluation</h1>

           {IsLoggedIn && <p>You are loggged in</p>}

           {user? `Hello ${user}` : "You are loggged in"}

           <div>
            <button onClick={()=>setIsLoggedIn(!IsLoggedIn)}>Toggle login state</button> <br />
            <button onClick={()=>setuser("nikhil")}>set users</button> <br />
            <button onClick={()=>setuser("")}>clear user</button>
           </div>
        </div>
    );
}
export default Shortcircuit;