import {useParams, useNavigate } from "react-router-dom";
import travelData from "./travel.json";

function TourDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

 const place = travelData.find(
   (item) => String(item.id) === id
  );

  if (!place) {
    return <h2 className="text-center mt-10">Destination not found</h2>;
  }
  const dis = (place.discount*place.price)/100;
  const final=place.price-dis;
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="rounded-xl shadow-lg border overflow-hidden">
        <img
          src={place.image_url}
          alt={place.location}
          className="w-full h-72 object-cover"
        />

        <div className="p-6">
          <h1 className="text-3xl font-bold mb-3">
            {place.location}
          </h1>

          <p className="text-lg mb-3">
            ⭐ Rating: {place.rating}
          </p>
          
          <p className="text-xl font-semibold mb-3">
            Price: ₹{place.price}
          </p>
          <p className="text-green-500 font-bold mb-1">
            {place.discount}% OFF
          </p>
          <p className="text-lg mb-3 font-bold">
            Book at: {final}
          </p>
          <p className="text-gray-600 mb-6">
            {place.description || "Explore this beautiful destination."}
          </p>

          <div className="flex gap-3">
            <button
              onClick={() => alert(`Booking ${place.location}`)}
              className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:scale-102"
            >
              Book Now
            </button>

            <button
              onClick={() => navigate(-1)}
              className="bg-gray-200 px-5 py-2 rounded-lg hover:scale-102"
            >
              Back
            </button>
            <button className="ml-90 hover:scale-102">view bank offers</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TourDetails;
