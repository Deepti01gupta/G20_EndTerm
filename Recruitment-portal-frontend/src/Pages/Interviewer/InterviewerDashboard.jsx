import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function InterviewerDashboard() {
  const [user, setUser] = useState(null);
  const [stats, setStats] = useState({ total: 0, pending: 0, completed: 0 });

  useEffect(() => {
    const loggedIn = JSON.parse(localStorage.getItem("loggedInUser"));
    setUser(loggedIn);

    const allSessions = JSON.parse(localStorage.getItem("sessions")) || [];
    const mySessions = allSessions.filter(s => s.interviewerEmail === loggedIn?.email);

    setStats({
      total: mySessions.length,
      pending: mySessions.filter(s => s.status === "scheduled").length,
      completed: mySessions.filter(s => s.status === "completed").length
    });
  }, []);

  return (
    <div className="py-4">
      <h2 className="mb-4">Welcome, {user?.name}!</h2>

      <div className="row mb-4">
        <div className="col-md-4">
          <div className="card text-center bg-success text-white">
            <div className="card-body">
              <h3>{stats.total}</h3>
              <p className="mb-0">Total Sessions</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center bg-warning">
            <div className="card-body">
              <h3>{stats.pending}</h3>
              <p className="mb-0">Pending Requests</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center bg-primary text-white">
            <div className="card-body">
              <h3>{stats.completed}</h3>
              <p className="mb-0">Completed</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body text-center">
              <h5>Interview Requests</h5>
              <p className="text-muted">View and manage incoming interview requests</p>
              <Link to="/interviewer/requests" className="btn btn-warning">View Requests</Link>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body text-center">
              <h5>Session History</h5>
              <p className="text-muted">Review past interviews and feedback</p>
              <Link to="/interviewer/my-sessions" className="btn btn-primary">View History</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InterviewerDashboard;
