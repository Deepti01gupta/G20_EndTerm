import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function EmployerNavbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem("loggedInUser")); }
    catch { return null; }
  });

  useEffect(() => {
    const onStorage = () => {
      try { setUser(JSON.parse(localStorage.getItem("loggedInUser"))); }
      catch { setUser(null); }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success fixed-top shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-4" to="/employer/dashboard">HireUp</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#employerNav"
          aria-controls="employerNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="employerNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            <li className="nav-item"><Link className="nav-link" to="/employer/post-job">Post Job</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/employer/manage-applications">Manage Applications</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/employer/view-jobs">View Jobs</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/employer/profile">Profile</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/employer/settings">Settings</Link></li>

            {user ? (
              <li className="nav-item ms-2">
                <div className="d-flex align-items-center">
                  <span className="me-2 text-white small">{user.name || user.email}</span>
                  <button className="btn btn-outline-light btn-sm" onClick={handleLogout}>Logout</button>
                </div>
              </li>
            ) : (
              <li className="nav-item ms-2"><Link className="nav-link btn btn-light text-success px-3" to="/login">Login</Link></li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default EmployerNavbar;
