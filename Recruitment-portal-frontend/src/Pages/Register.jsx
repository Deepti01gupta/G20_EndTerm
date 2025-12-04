import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("interviewee");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Validate inputs
    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields");
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      setLoading(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

      const userExists = existingUsers.some((u) => u.email === email);
      if (userExists) {
        setError("Email already registered. Please login.");
        setLoading(false);
        return;
      }

      const newUser = { name, email, password, role };
      localStorage.setItem("users", JSON.stringify([...existingUsers, newUser]));

      setLoading(false);
      navigate("/login");
    }, 500);
  };

  return (
    <div className="register-container">
      <div className="register-wrapper">
        {/* Right Side - Illustration */}
        <div className="register-right">
          <div className="illustration-container">
            <div className="illustration-bg">
              <div className="illustration-shape shape-1"></div>
              <div className="illustration-shape shape-2"></div>
              <div className="illustration-image">
                <div className="person-avatar">🚀</div>
                <div className="person-card">
                  <span className="person-text">✨</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Left Side - Register Form */}
        <div className="register-left">
          <div className="register-form-box">
            <h1 className="register-heading">CREATE ACCOUNT</h1>
            <p className="register-subheading">Join us and start your journey today!</p>

            {error && (
              <div className="alert alert-error">
                <span className="alert-icon">⚠️</span>
                <span>{error}</span>
                <button 
                  className="alert-close"
                  onClick={() => setError("")}
                >
                  ✕
                </button>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <div className="input-wrapper">
                  <span className="input-icon">👤</span>
                  <input
                    type="text"
                    className="form-input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Full Name"
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="input-wrapper">
                  <span className="input-icon">📧</span>
                  <input
                    type="email"
                    className="form-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Email Address"
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="input-wrapper">
                  <span className="input-icon">🔒</span>
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Password"
                  />
                  <button
                    type="button"
                    className="toggle-password-btn"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "🙈" : "👁️"}
                  </button>
                </div>
              </div>

              <div className="form-group">
                <div className="input-wrapper">
                  <span className="input-icon">🔒</span>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    className="form-input"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    placeholder="Confirm Password"
                  />
                  <button
                    type="button"
                    className="toggle-password-btn"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? "🙈" : "👁️"}
                  </button>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Account Type</label>
                <div className="role-selector">
                  <label className={`role-option ${role === "interviewee" ? "active" : ""}`}>
                    <input
                      type="radio"
                      name="role"
                      value="interviewee"
                      checked={role === "interviewee"}
                      onChange={(e) => setRole(e.target.value)}
                    />
                    <span className="role-icon">💼</span>
                    <span className="role-text">Interviewee</span>
                  </label>
                  <label className={`role-option ${role === "interviewer" ? "active" : ""}`}>
                    <input
                      type="radio"
                      name="role"
                      value="interviewer"
                      checked={role === "interviewer"}
                      onChange={(e) => setRole(e.target.value)}
                    />
                    <span className="role-icon">🏢</span>
                    <span className="role-text">Interviewer</span>
                  </label>
                </div>
              </div>

              <button 
                type="submit" 
                className="register-btn"
                disabled={loading}
              >
                {loading ? "Creating Account..." : "Register Now"}
              </button>
            </form>

            {/* Login Link */}
            <div className="login-section">
              <p>Already have an account? <Link to="/login" className="login-link">Sign in</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
