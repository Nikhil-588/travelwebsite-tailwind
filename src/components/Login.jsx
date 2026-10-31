
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handle1(e) {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Invalid details");
        return;
      }

      // Store JWT token
      localStorage.setItem("token", data.token);

      alert("Login successful");

      navigate("/");

    } catch (error) {
      console.log("Login Error:", error);
      alert("Backend connection failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex justify-center">

      <div className="border-2 rounded-lg p-8 my-10 w-[400px]">

        <h1 className="text-blue-800 flex justify-center font-bold text-2xl mb-6">
          Login In
        </h1>

        <form onSubmit={handle1}>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block mb-2">
              Email
            </label>

            <input
              id="email"
              type="email"
              placeholder="Email"
              required
              value={email}
              autoComplete="email"
              onChange={(e) => setEmail(e.target.value)}
              className="border-2 rounded-lg w-full p-2 mb-4"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block mb-2">
              Password
            </label>

            <input
              id="password"
              type="password"
              placeholder="Password"
              required
              value={password}
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
              className="border-2 rounded-lg w-full p-2 mb-4"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="flex justify-center border-2 bg-blue-200 mx-auto rounded-lg px-6 py-2 hover:bg-blue-300 disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <Link
            to="/sign"
            className="text-blue-600 hover:underline"
          >
            Create one
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Login;
