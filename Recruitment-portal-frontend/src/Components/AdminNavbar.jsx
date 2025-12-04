import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AdminNavbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem("loggedInUser")); }
    catch { return null; }
  });

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-4" to="/admin/dashboard">InterviewPrep Admin</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#adminNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="adminNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            <li className="nav-item"><Link className="nav-link" to="/admin/dashboard">Dashboard</Link></li>
            
            {user && (
              <li className="nav-item ms-2">
                <div className="d-flex align-items-center">
                  <span className="me-2 text-white small">Admin</span>
                  <button className="btn btn-outline-light btn-sm" onClick={handleLogout}>Logout</button>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default AdminNavbar;
