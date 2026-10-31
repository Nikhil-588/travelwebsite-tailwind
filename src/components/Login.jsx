import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
function Login(){
          const navigate=useNavigate();
      const [email , setEmail]=useState("");
      const [password, setPassword]=useState("");
    function handle1(){
      const saveduser=JSON.parse(localStorage.getItem("user"));
      if(!saveduser){
        alert("email is not registered please sign up");
        return;
      }
      if(saveduser.email==email && saveduser.password==password){
        alert("login succcessful");
        navigate("/");
      }
      else{
        alert("invalid details")
      }
    }
    return(
        <div className="flex justify-center ">
            <div className="border-2 rounded-lg p-8 my-10 w-[400px] ">
            <h1 className="text-blue-800  flex justify-center font-bold ">Login In</h1>
            <div>
                <label htmlFor="email" className="block mb-2">Email</label>
                <input type="email" placeholder="Email" required value={email} autoComplete="off" onChange={(e)=>setEmail(e.target.value)} className="border border-2 rounded-lg w-full p-2  mb-4"/>
            </div>
            <div>
                <label htmlFor="Password" className="block mb-2">Password</label>
                <input type="Password" placeholder="password" required value={password} onChange={(e)=>setPassword(e.target.value)} className=" border-2 rounded-lg w-full p-2 mb-4"/>
            </div>
            <button onClick={handle1} className="flex justify-center border border-r-2  bg-blue-200 ml-30  rounded-[8px] max-w-full px-2">Login</button>
            <p className="mt-4">Don't have account?
                <Link to="/sign">Create one</Link>
            </p>
            </div>
        </div>
    );
}
export default Login;