import { Link } from "react-router-dom";
import travelData from "./travel.json";

function Cardes({ onBook }) {
  const handleCardClick = (place) => {
    console.log("Destination details opened:", place);
  };

  const handleBooking = (place) => {
    if (onBook) {
      onBook(place);
    } else {
      console.log("Booking started:", place);
    }
  };
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        Popular Destinations
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {travelData.slice(0,6).map((e) => (
          <div
            key={e.location}
            onClick={() => handleCardClick(e.location)}
            className="border rounded-xl p-5 shadow-md cursor-pointer hover:shadow-xl transition"
          >
            <h2 className="text-xl font-bold mb-2">
              {e.location}
            </h2>

            <p className="mb-3">Rating: ⭐ {e.rating}</p>

            {e.image && (
              <img
                src={e.image}
                alt={e.location}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            )}

           

            <div className="flex gap-3">
              <Link
  to={`/tours/${e.id}`}
  onClick={(event) => event.stopPropagation()}
  className="bg-gray-200 px-3 py-2 rounded text-center"
>
  View Details
</Link>

              <button
                onClick={(event) => {
                  event.stopPropagation();
                  handleBooking(e.location);
                }}
                className="bg-blue-600 text-white px-3 py-2 rounded"
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cardes;
