import { useState, useEffect } from "react";

function ImageSlider() {
  const images = [
    "/image.png",
    "/paris.png",

  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full h-[450px] overflow-hidden">
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Travel destination ${index + 1}`}
            className="w-full h-full object-cover shrink-0"
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;