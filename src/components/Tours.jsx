import traveldata from "./travel.json";
import { useState } from "react";
//import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Tours() {
  const Navigate = useNavigate();
  const [search, setsearch] = useState("");
const filterdata = traveldata.filter((n) =>
  n.location.trim().toLowerCase().includes(search.trim().toLowerCase())
);
console.log("Search:", search);
console.log("Travel Data:", traveldata);
console.log("Filtered Data:", filterdata);

  return (
    <>
      <div className="flex flex-col items-center font-bold text-2xl mt-3 gap-3">
        <h1 className="text-blue-800 mt-5">Select your destination</h1>
        <br />
        <div>
          <input
            type="text"
            placeholder="search your....."
            value={search}
            onChange={(e) => {setsearch(e.target.value)}}
            className="border border-gray-400 rounded-lg p-2 w-full sm:w-72 outline-none focus:border-blue-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
        {filterdata.length > 0 ? (
          filterdata.map((n) => (
            <ul
              key={n.id}
              className="border rounded-lg hover:scale-100"
            >
              <li>
                <img
                  src={n.image_url}
                  alt="cfghjk"
                  className="w-full h-48 object-cover rounded-lg"
                />

                <h1 className="text-2xl ml-2 font-bold text-blue-600">{n.location}</h1>
                <p  className="ml-2">⭐ Rating:{n.rating}</p>
                <p className="ml-2 font-bold">price:${n.price}</p>

                <button
                  onClick={() => Navigate(`/tours/${n.id}`, { state: n })}
                  className="border border-2 p-2 rounded-[5px] mt-3 ml-2 mb-3 hover:scale-105 bg-blue-500"
                >
                  Book Now
                </button>

                <button
                  onClick={() => Navigate(`/tours/${n.id}`, { state: n })}
                  className="border border-2 p-2 rounded-[5px] mt-3 ml-65 mb-3 bg-gray-500 hover:scale-105"
                >
                  View Offers
                </button>
              </li>
            </ul>
          ))
        ) : (
          <p className="text-center text-red-500 col-span-full">
            No destinations found!
          </p>
        )}
      </div>
    </>
  );
}

export default Tours;