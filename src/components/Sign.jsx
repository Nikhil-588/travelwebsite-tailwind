import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Sign(){
    const navigate=useNavigate();
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    function handle(){
        if(!name || !email || !password){
            alert("please fill the all the details");
            return;
        }
        const user={
            name: name,
            email:email,
            password:password,
        };
        localStorage.setItem("user",JSON.stringify((user))); 
         navigate("/");


    }
    return(
        <div className="flex justify-center">
          <div className="border-2 rounded-lg p-8 my-10 w-[400px]  hover:shadow-2xl transition">
            <div className="flex justify-center font-bold text-blue-600 text-xl">
            <h1>SIGN IN</h1>
            </div>
            <label htmlFor="name" className="block mb-0  font-bold">Name :</label> <br />
            <input type="text" placeholder="Full name" value={name} onChange={(e)=>setName(e.target.value)} required className=" border-2 rounded-lg w-full p-2 mb-4"/>
            <br/>
            <label htmlFor="email" className="block mb-0 font-bold">Email :</label> <br />
            <input type="email"  placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} required className= " border-2 rounded-lg w-full p-2 mb-4"/>
            <br />
            <label htmlFor="password" className="block mb-0 font-bold">Password :</label> <br />
            <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} required className=" border-2 rounded-lg w-full p-2 mb-3" />
            <div className="flex justify-center">
            <button type="button" onClick={handle} className="font-bold bg-blue-600 rounded-[5px] w-full py-2 mt-4 hover:text-white">sign in</button>
           </div>
           <div>
            <p className="mt-4 font-bold">Already have Account? 
                <Link to="/login " className="hover:text-green-600 font-bold text-blue-700">Login</Link>
            </p>
           </div>
           <p>hello:{name}</p>
               </div>
        </div>
    );
}
export default Sign;