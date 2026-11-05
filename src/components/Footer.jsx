//import { PiAirplaneTiltBold } from "react-icons/pi";
///import Home from "./Home";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
function Footer(){
  return(
    <div className="bg-gray-300 text-black font-sans">
        <div className="text-center">
          <h2 className="font-bold mb-3 text-xl">Travel World </h2>
          <p className="mb-4 font-bold">Explore More. Travel More. Create Memories.</p>
        </div>
        <div className="flex justify-center gap-4 mb-3 font-bold">
         <Link to="/" className="hover:text-blue-500">Home</Link>
         <Link to="/tours" className="hover:text-blue-500">Tours</Link>
         <Link to="/about" className="hover:text-blue-500">About</Link>
         </div>
         <div className="flex justify-center items-center gap-4 mb-4 ">
          <a href="https://www.instagram.com" target="_blank"> <FaInstagram  size={25} className="hover:scale-101 hover:text-pink-600"/></a>
         <a href="https://www.facebook.com"  target="_blank"><FaFacebookSquare size={25} className="hover:scale-101 hover:text-blue-400"/> </a>
        <a href="https://www.youtube.com" target="_blank"> <FaYoutube size={25} className="hover:scale-101 hover:text-red-400"/> </a>
        
       <a href="https://www.twitter.com" target="_blank"><FaXTwitter size={25} className="hover:scale-101 hover:text-blue-400"/></a>
         </div>
         <div className="text-center mt-5 font-bold">
          <p> © 2026 TravelWorld. All Rights Reserved</p>
         </div>
    </div>
  );
}
export default Footer;