import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) => u.email === email && u.password === password);

    if (email === "admin@example.com" && password === "admin123") {
      const adminUser = { name: "Admin", email: "admin@example.com", role: "admin" };
      localStorage.setItem("loggedInUser", JSON.stringify(adminUser));
      navigate("/admin/dashboard");
      return;
    }

    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      if (user.role === "interviewer") {
        navigate("/interviewer/dashboard");
      } else {
        navigate("/interviewee/dashboard");
      }
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="card shadow p-4" style={{ maxWidth: "400px", width: "100%" }}>
        {/* Logo / Title */}
        <h2 className="text-center mb-4">InterviewPrep Login</h2>

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
