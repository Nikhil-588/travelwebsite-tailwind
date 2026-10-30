import traveldata from "./travel.json"
import {  useNavigate } from "react-router-dom";
function Tours(){
 const Navigate=useNavigate();
  return(
    <>
    <div className="flex justify-center font-bold text-2xl mt-3">
       <h1>Select your destination</h1>
</div>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
        {traveldata.map((n)=>{
            //const dis=(n.price*n.discount)/100;
            //const finalprice=n.price-dis;
          return(
          <ul  key={n.id} className="border rounded-lg hover:scale-100">
            <li>  
              <img src={n.image_url} alt="" 
              className="w-full h-48 object-cover rounded-lg"/>
 
               <h1 className="text-2xl ml-2">{n.location}</h1>
               <p className="ml-2">Rating:{n.rating}</p>
               <p className="ml-2">price:${n.price}</p>
               
               
               
                <button onClick={()=>Navigate(`/tours/${n.id}`,{ state: n })} className="border border-2 p-2 rounded-[5px] mt-3 ml-2 mb-3 hover:scale-105 bg-blue-500"
                 >Book Now</button>
                   <button onClick={()=>Navigate(`/tours/${n.id}`,{ state: n })} className="border border-2 p-2 rounded-[5px] mt-3 ml-60 mb-3 bg-white hover:scale-105"
                 >View Offers</button>

            </li> 
          </ul>
          );
})}
       
    </div>
    </>
  );
}
export default Tours;

