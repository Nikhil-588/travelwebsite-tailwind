import { useNavigate } from "react-router-dom";
//import { BsBank } from "react-icons/bs";
function Bankdetails(){
    const navigate=useNavigate();
    const banks=[
   {name: "HDFC", discount:10},
   {name: "SBI", discount:15},
   {name: "IDFC", discount:18},
   {name: "Union", discount:20 },
   {name: "FI", discount:10},
   {name: "ICICI", discount:15},
   {name: "Punjab", discount:18},
   {name: "canara", discount:20},
    ];
    return(
        <div>
         <div>
            <h1 className="font-bold flex justify-center">BANK OFFERS</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 p-5">
            {banks.map((a)=>{
                return(
                    <ul key={a.name}
              className="border rounded-xl shadow-md p-5 hover:shadow-xl ">
                        <li>
                            <p className="font-bold text-2xl  ml-3"> {a.name} Bank</p>
                            <p className="text-2xl font-  ml-3 text-green-600">{a.discount}% OFF</p>
                            <button onClick={()=>alert("offer applied")} className="bg-blue-500 text-white px-10 py-2 rounded-lg mt-3">Apply</button>
                        </li>
                    </ul>
                );
            })}
         </div>
         <div>
            <button onClick={()=>navigate(-1)} className="flex justify-center font-bold text-2xl ml-110  bg-amber-200 rounded-xl px-80">Back</button>
         </div>
         </div>
        </div>
    );
}
export default Bankdetails;