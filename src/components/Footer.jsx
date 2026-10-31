//import { PiAirplaneTiltBold } from "react-icons/pi";
///import Home from "./Home";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
function Footer(){
  return(
    <div className="bg-gray-900 text-white ">
        <div className="text-center">
          <h2 className="font-bold">Travel World </h2>
          <p>Explore More. Travel More. Create Memories.</p>
        </div>
        <div className="flex justify-center gap-4 mb-2 ">
         <Link to="/" className="hover:text-blue-500">Home</Link>
         <Link to="/tours" className="hover:text-blue-500">Tours</Link>
         <Link to="/about" className="hover:text-blue-500">About</Link>
         </div>
         <div className="flex justify-center items-center gap-4 mb-4 ">
        <FaInstagram /> <FaFacebookSquare /> <FaYoutube /> <FaXTwitter />
         </div>
         <div className="text-center">
          <p> © 2026 TravelWorld. All Rights Reserved</p>
         </div>
    </div>
  );
}

export default Footer;