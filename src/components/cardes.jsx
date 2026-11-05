import { Link } from "react-router-dom";
import travelData from "./travel.json";
function Cardes({ onBook }) {
  const handleCardClick = (place) => {
    console.log("Destination details opened:", place);
  };
  const handleBooking = (place) => {
    console.log("place-----",place);
    if (onBook) {
      onBook(place);
    } else {
      console.log("Booking started:", place);
    }
  };
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-8 ">
        Popular Destinations
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {travelData.slice(0,6).map((e) => (
          <div
            key={e.location}
            onClick={() => handleCardClick(e.location)}
            className="bg-white relative group rounded-2xl overflow-hidden
            shadow-md hover:shadow-2xl transition-all duration-300
            hover:-translate-y-1 border border-gray-100 w-full h-90"
            style={{ 
              backgroundImage: `url(${e.image_url})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            <div className=" opacity-0  group-hover:opacity-100  absolute  bottom-0  left-0 w-full p-6 border border-2 rounded-2xl bg-green-100 mr-4">
            <h2 className="text-xl font-bold mb-2 italic">  
              {e.location}
            </h2>
    
            <p className="mb-3 italic">Rating: ⭐ {e.rating}</p>
            <div className="flex gap-3">
              <Link
  to={`/tours/${e.id}`}
  onClick={(event) => event.stopPropagation()}
  className="bg-gray-200 px-3 py-2 rounded text-center  hover:scale-102"
>
  View Details
</Link>

              <button
                onClick={(event) => {
                  event.stopPropagation();
                  handleBooking(e.location);
                }}
                className="bg-blue-600 text-white px-3 py-2 rounded hover:scale-101"
              >
                Book Now
              </button>
            </div>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cardes;
