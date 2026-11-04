import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import TDate from "./TDate";
function Login(){
          const navigate=useNavigate();
      const [email , setEmail]=useState("");
      const [password, setPassword]=useState("");
        useEffect(()=>{
          document.title=`Travel website login`;
        },[]);
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
          
            <div className="border-2 rounded-lg p-8 my-30 w-[400px] hover:shadow-2xl transition">
            <h1 className="text-blue-800  flex justify-center py-0 font-bold text-2xl">LOG IN</h1>
            <div>
                <label htmlFor="email" className="block mb-2 font-bold">Email</label>
                <input type="email" placeholder="Email" required value={email} autoComplete="off" onChange={(e)=>setEmail(e.target.value)} className="border border-2 rounded-lg w-full p-2  mb-4"/>
            </div>
            <div>
                <label htmlFor="Password" className="block mb-2 font-bold">Password</label>
                <input type="Password" placeholder="password" required value={password} onChange={(e)=>setPassword(e.target.value)} className=" border-2 rounded-lg w-full p-2 mb-4"/>
            </div>
            <button onClick={handle1} className=" bg-blue-600 mt-3 font-bold w-full rounded-[8px]  px-2 py-2 hover:text-white">Login</button>
            <p className="mt-4 font-stretch-100% font-bold">Don't have account?
                <Link to="/sign" className="hover:text-blue-600 font-bold text-green-700">Create one</Link>
            </p>
            </div>
        </div>
    );
}
export default Login;