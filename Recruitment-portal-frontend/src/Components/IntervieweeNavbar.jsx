import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Notifications from "./Notifications";

function IntervieweeNavbar() {
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
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-4" to="/interviewee/dashboard">InterviewPrep</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#intervieweeNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="intervieweeNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            <li className="nav-item"><Link className="nav-link" to="/interviewee/dashboard">Dashboard</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/interviewee/find-interviewer">Find Interviewer</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/interviewee/my-sessions">My Sessions</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/interviewee/jobs">Jobs</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/interviewee/profile">Profile</Link></li>

            {user && (
              <li className="nav-item ms-2 d-flex align-items-center">
                <Notifications />
                <div className="d-flex align-items-center">
                  <span className="me-2 text-white small">{user.name}</span>
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

export default IntervieweeNavbar;
