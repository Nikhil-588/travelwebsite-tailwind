
import { useEffect, useState } from "react";
import About from "./About";
import Cardes from "./Cardes";
import Footer from "./Footer";

function Home() {
  const [time, settime] = useState("");
  const [bookingCount, setBookingCount] = useState(0);
  const [current, setCurrent] = useState(0);

  const slides = [
    {
      image: "/image.png",
      title: "Take Only Memories, Leave Only Footsteps",
      subtitle: "Wander often, wonder always. Adventure begins where comfort ends.",
    },
    {
      image: "/paris.png",
      title: "Dream. Explore. Discover.",
      subtitle: "The world is waiting for you. Start your journey today!",
    },
  ];

  useEffect(() => {
    document.title = "Travel website";

    const updateTime = () => {
      const now = new Date();
      settime(
        `${now.toLocaleDateString()} - ${now.toLocaleTimeString()}`
      );
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(slider);
  }, [slides.length]);

  function handleBooking(place) {
    setBookingCount((count) => count + 1);
    alert(`You selected ${place}!`);
  }

  return (
    <div>
      <div className="text-right mr-10">
        <p className="font-bold">{time}</p>
      </div>

      
      <div className="relative w-full h-[550px] overflow-hidden">
        <div
          className="flex h-full transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="relative w-full h-full shrink-0">
              <img
                src={slide.image}
                alt="Travel destination"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/35"></div>

              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-5">
                <h1 className="text-white text-3xl md:text-5xl font-bold">
                  {slide.title}
                </h1>

                <p className="text-white text-lg md:text-2xl mt-5">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-center text-xl font-bold my-4">
        Booking attempts: {bookingCount}
      </p>

      <Cardes onBook={handleBooking} />
      <About />
      <Footer />
    </div>
  );
}

export default Home;
