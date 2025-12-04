import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("jobseeker");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get existing users from localStorage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Check if user already exists
    const userExists = existingUsers.some((u) => u.email === email);
    if (userExists) {
      alert("User already registered. Please login.");
      navigate("/login");
      return;
    }

    // Create new user object
    const newUser = { name, email, password, role };

    // Save user in localStorage
    localStorage.setItem("users", JSON.stringify([...existingUsers, newUser]));

    alert("Registration successful! Please login.");
    navigate("/login"); // redirect to login page
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="card shadow p-4" style={{ maxWidth: "400px", width: "100%" }}>
        {/* Title */}
        <h2 className="text-center mb-4">Create an Account</h2>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Enter your full name"
            />
          </div>

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
              placeholder="Enter a strong password"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Role</label>
            <select
              className="form-select"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="jobseeker">Job Seeker</option>
              <option value="employer">Employer</option>
            </select>
          </div>

          <button className="btn btn-success w-100 mb-3">Register</button>
        </form>

        {/* Extra Links */}
        <div className="text-center">
          <span>Already have an account? </span>
          <Link to="/login" className="fw-bold">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
