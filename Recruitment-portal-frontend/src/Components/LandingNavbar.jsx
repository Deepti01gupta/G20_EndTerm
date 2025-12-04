import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function LandingNavbar() {
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
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-4" to="/">HireUp</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#landingNav"
          aria-controls="landingNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="landingNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {!user && (
              <>
                <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
                <li className="nav-item">
                  <Link className="nav-link btn btn-primary text-white px-3 ms-lg-2" to="/register">Register</Link>
                </li>
              </>
            )}

            {user && (
              <>
                {/* Dashboard link depends on role */}
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to={user.role === "employer" ? "/employer/dashboard" : "/jobseeker/dashboard"}
                  >
                    Dashboard
                  </Link>
                </li>

                {/* User dropdown / info */}
                <li className="nav-item dropdown">
                  <button
                    className="btn nav-link dropdown-toggle"
                    id="userMenu"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ background: "transparent", border: "none" }}
                  >
                    {user.name ? user.name : user.email}
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userMenu">
                    <li>
                      <span className="dropdown-item-text small text-muted">Role: {user.role}</span>
                    </li>
                    <li><hr className="dropdown-divider" /></li>
                    <li>
                      <button className="dropdown-item" onClick={() => navigate(user.role === "employer" ? "/employer/profile" : "/jobseeker/profile")}>
                        Profile
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item text-danger" onClick={handleLogout}>
                        Logout
                      </button>
                    </li>
                  </ul>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default LandingNavbar;
