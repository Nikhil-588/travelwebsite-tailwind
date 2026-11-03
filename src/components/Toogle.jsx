import { IoIosSwitch } from "react-icons/io";
import { useState } from "react";
import { FaUserPlus } from "react-icons/fa6";

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };
  return (
    <div className="p-6">
      <h1 className="p-10 font-bold text-2xl">Toogle switch <IoIosSwitch size={10} /></h1>
      <a href="#"><FaUserPlus /></a>
      <button
        onClick={handleToggle}
        className={`w-16 h-8 rounded-full p-1 transition-colors ${
          isOn ? "bg-green-500" : "bg-gray-400"
        }`}
      >
        <div
          className={`w-6 h-6 bg-white rounded-full transition-transform ${
            isOn ? "translate-x-8" : "translate-x-0"
          }`}
        />
      </button>
      <p className="mt-3">
        Status: {isOn ? "ON" : "OFF"}
      </p>
    </div>
  );
}


export default Toggle;
