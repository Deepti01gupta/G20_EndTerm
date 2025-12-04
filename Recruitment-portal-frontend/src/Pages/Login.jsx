import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Validate inputs
    if (!email || !password) {
      setError("Please fill in all fields");
      setLoading(false);
      return;
    }

    // Simulate API call delay
    setTimeout(() => {
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
        setError("Invalid email or password. Please try again.");
        setLoading(false);
      }
    }, 500);
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        {/* Left Side - Login Form */}
        <div className="login-left">
          <div className="login-form-box">
            <h1 className="login-heading">LOGIN</h1>
            <p className="login-subheading">How to get started lorem ipsum dolor at?</p>

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
                    type="email"
                    className="form-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Username"
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

              <button 
                type="submit" 
                className="login-btn"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login Now"}
              </button>
            </form>

            {/* Social Login */}
            <div className="social-login">
              <p className="social-text">Login with Others</p>
              <div className="social-buttons">
                <button className="social-btn google-btn" title="Login with Google">
                  <span>🔍</span>
                  <span>Login with google</span>
                </button>
                <button className="social-btn facebook-btn" title="Login with Facebook">
                  <span>f</span>
                  <span>Login with Facebook</span>
                </button>
              </div>
            </div>

            {/* Register Link */}
            <div className="register-section">
              <p>Don't have an account? <Link to="/register" className="register-link">Sign up</Link></p>
            </div>
          </div>
        </div>

        {/* Right Side - Illustration */}
        <div className="login-right">
          <div className="illustration-container">
            <div className="illustration-bg">
              <div className="illustration-shape shape-1"></div>
              <div className="illustration-shape shape-2"></div>
              <div className="illustration-image">
                <div className="person-avatar">👩</div>
                <div className="person-card">
                  <span className="person-text">📱</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
