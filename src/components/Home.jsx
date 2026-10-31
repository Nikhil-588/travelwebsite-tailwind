
import { useState } from "react";
import About from "./About";
//import Tours from "./Tours";
import Cardes from "./cardes";
import Footer from "./Footer";

function Home() {
  const [time, settime]=useState();
  const [bookingCount, setBookingCount] = useState(0);
    
   setInterval(() => {
     const now = new Date();
  const tdate=now.toLocaleDateString();
  const ttime=now.toLocaleTimeString();
  settime(`${tdate}-${ttime}`);
   }, 1000);

  function handleBooking(place) {
    setBookingCount(count => count + 1);
    alert(`You selected ${place}!`);
  }

  return (
    <div>
      <div>
        <p>{time}</p>
      </div>
      <div
        style={{
          backgroundImage: "url('/image.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="w-full h-150"
      >
        
        <h1 className="mx-auto max-w-7xl font-bold text-3xl py-55">
          Take Only Memories, Leave Only Footsteps
          <br />
          <div>
          <p className="text-1xl">Wander often, wonder always <span className="text-green-500">adventure</span><br /> begins where comfort ends</p>
          <h1 className="text-blue-500">Dream. Explore. Discover.
</h1>
</div>
        </h1>
      </div>

      <p className="text-center text-xl font-bold my-4">
        Booking attempts: {bookingCount}
      </p>
       
      <Cardes onBook={handleBooking} />
      <About />
      <Footer/>
    </div>
    
  );
}

export default Home;
