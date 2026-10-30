
import { Link } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa6";

function Navbar({ isDark, setIsDark }) {
  return (
    <nav className="bg-amber-500 w-full flex items-center justify-between px-6 py-4">

      <h1 className="text-blue-700 font-bold text-xl">
        Next Trip
      </h1>
      <div className="flex items-center gap-8">
        <Link to="/" className="hover:text-blue-700">
          Home
        </Link>

        <Link to="/tours" className="hover:text-blue-700">
          Tours
        </Link>

        <Link to="/about" className="hover:text-blue-700">
          About
        </Link>

        <Link to="/sign" className="hover:text-blue-700">
          Sign In
        </Link>
        
        <Link to="/Login" className="hover:text-blue-700">
          Login
        </Link>
        <Link to="/sign"><FaUserPlus />
</Link>
        {/* Dark mode toggle */}
        <button
          onClick={() => setIsDark(!isDark)}
          className={`w-14 h-7 rounded-full p-1 transition-colors ${
            isDark ? "bg-gray-800" : "bg-gray-300"
          }`}
          aria-label="Toggle dark mode"
          aria-pressed={isDark}
        >
          <div
            className={`w-5 h-5 bg-white rounded-full transition-transform ${
              isDark ? "translate-x-7" : "translate-x-0"
            }`}
          />
        </button>
      </div>

    </nav>
  );
}

export default Navbar;
