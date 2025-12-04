import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function IntervieweeDashboard() {
  const [user, setUser] = useState(null);
  const [sessions, setSessions] = useState([]);
  const [stats, setStats] = useState({ total: 0, completed: 0, upcoming: 0, avgRating: 0 });

  useEffect(() => {
    const loggedIn = JSON.parse(localStorage.getItem("loggedInUser"));
    setUser(loggedIn);

    const allSessions = JSON.parse(localStorage.getItem("sessions")) || [];
    const mySessions = allSessions.filter(s => s.intervieweeEmail === loggedIn?.email);
    setSessions(mySessions.slice(0, 3));

    const completedSessions = mySessions.filter(s => s.status === "completed" && s.feedback?.rating);
    const totalRating = completedSessions.reduce((acc, curr) => acc + parseInt(curr.feedback.rating), 0);
    const avg = completedSessions.length ? (totalRating / completedSessions.length).toFixed(1) : 0;

    setStats({
      total: mySessions.length,
      completed: mySessions.filter(s => s.status === "completed").length,
      upcoming: mySessions.filter(s => s.status === "scheduled").length,
      avgRating: avg
    });
  }, []);

  return (
    <div className="py-4">
      <h2 className="mb-4">Welcome back, {user?.name || "User"}!</h2>

      <div className="row mb-4">
        <div className="col-md-3">
          <div className="card text-center bg-primary text-white">
            <div className="card-body">
              <h3>{stats.total}</h3>
              <p className="mb-0">Total Sessions</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center bg-success text-white">
            <div className="card-body">
              <h3>{stats.completed}</h3>
              <p className="mb-0">Completed</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center bg-warning">
            <div className="card-body">
              <h3>{stats.upcoming}</h3>
              <p className="mb-0">Upcoming</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center bg-info text-white">
            <div className="card-body">
              <h3>{stats.avgRating} / 5</h3>
              <p className="mb-0">Avg Rating</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Recent Sessions</h5>
          <Link to="/interviewee/my-sessions" className="btn btn-sm btn-outline-primary">View All</Link>
        </div>
        <div className="card-body">
          {sessions.length === 0 ? (
            <p className="text-muted">No sessions yet. <Link to="/interviewee/find-interviewer">Find an interviewer</Link> to get started!</p>
          ) : (
            <ul className="list-group list-group-flush">
              {sessions.map((s, i) => (
                <li key={i} className="list-group-item d-flex justify-content-between">
                  <div>
                    <strong>{s.interviewerName}</strong>
                    <br />
                    <small className="text-muted">{s.scheduledDate} at {s.scheduledTime}</small>
                  </div>
                  <span className={`badge bg-${s.status === 'completed' ? 'success' : 'warning'} align-self-center`}>
                    {s.status}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="text-center">
        <Link to="/interviewee/find-interviewer" className="btn btn-primary btn-lg">
          Schedule New Interview
        </Link>
      </div>
    </div>
  );
}

export default IntervieweeDashboard;
