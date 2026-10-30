
import { useState } from "react";
import About from "./About";
//import Tours from "./Tours";
import Cardes from "./cardes";

function Home() {
  const [bookingCount, setBookingCount] = useState(0);

  function handleBooking(place) {
    setBookingCount(count => count + 1);
    alert(`You selected ${place}!`);
  }

  return (
    <div>
      <div
        style={{
          backgroundImage: "url('/image.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="w-full h-150"
      >
        <h1 className="mx-auto max-w-7xl font-bold text-3xl py-65">
          Take Only Memories, Leave Only Footsteps
        </h1>
      </div>

      <p className="text-center text-xl font-bold my-4">
        Booking attempts: {bookingCount}
      </p>
       
      <Cardes onBook={handleBooking} />
      <About />
    </div>
  );
}

export default Home;
