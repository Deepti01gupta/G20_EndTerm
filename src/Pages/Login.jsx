import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Find matching user
    const user = users.find((u) => u.email === email && u.password === password);

    if (user) {
      // Save logged in user
      localStorage.setItem("loggedInUser", JSON.stringify(user));

      alert(`Welcome back, ${user.name}!`);

      // Redirect based on role
     if (user.role === "employer") {
  navigate("/employer/dashboard");
} else {
  navigate("/jobseeker/dashboard");
}

    } else {
      alert("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="card shadow p-4" style={{ maxWidth: "400px", width: "100%" }}>
        {/* Logo / Title */}
        <h2 className="text-center mb-4">Login to HireUp</h2>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
          </div>

          <button className="btn btn-primary w-100 mb-3">Login</button>
        </form>

        {/* Extra Links */}
        <div className="text-center">
          <Link to="/forgot-password" className="d-block mb-2 text-decoration-none">
            Forgot Password?
          </Link>
          <span>
            Don’t have an account?{" "}
            <Link to="/register" className="fw-bold">
              Register
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
