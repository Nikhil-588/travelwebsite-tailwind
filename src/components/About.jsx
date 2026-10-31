
import { Link } from "react-router-dom";
function About(){
    return(
        

        <div>
         <div className="bg-gray-500 mb-3">
            <section id="about" className="py-10">

         <h1 className="flex justify-center font-bold mx-5 text-2xl mb-4">ABOUT US</h1>
         <p className="flex justify-center ml-40 mr-40">Welcome to Travel Explorer, your trusted companion for discovering amazing destinations around the world!

We believe that traveling is more than just visiting new places — it's about creating unforgettable memories, experiencing different cultures, and exploring the beauty of our planet.

Our mission is to make travel planning simple, and inspiring. From beautiful beaches, peaceful mountains to historic cities and exciting adventures, we help travelers discover destinations that match their interests.

Whether you're planning a relaxing holiday, a family vacation, a romantic getaway, adventurous trip with friends, we're here to inspire your next journey.</p>
         </section>
         <div className="text-center"> 
            <Link to="/tours" className="inline-block border-2 border-black p-2 mb-5">Learn more</Link>
         </div>
         </div>
        </div>
    
    );
}
export default About;