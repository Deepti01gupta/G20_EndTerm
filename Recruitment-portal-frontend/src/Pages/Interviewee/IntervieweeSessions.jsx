import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function IntervieweeSessions() {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const loggedIn = JSON.parse(localStorage.getItem("loggedInUser"));
    const allSessions = JSON.parse(localStorage.getItem("sessions")) || [];
    const mySessions = allSessions.filter(s => s.intervieweeEmail === loggedIn?.email);
    setSessions(mySessions.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
  }, []);

  return (
    <div className="py-4">
      <h2 className="mb-4">My Interview Sessions</h2>

      {sessions.length === 0 ? (
        <div className="alert alert-info">
          No sessions yet. <Link to="/interviewee/find-interviewer">Find an interviewer</Link> to book your first session!
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table table-hover">
            <thead className="table-dark">
              <tr>
                <th>Interviewer</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
                <th>Feedback</th>
              </tr>
            </thead>
            <tbody>
              {sessions.map((session, idx) => (
                <tr key={idx}>
                  <td>{session.interviewerName}</td>
                  <td>{session.scheduledDate}</td>
                  <td>{session.scheduledTime}</td>
                  <td>
                    <span className={`badge bg-${session.status === 'completed' ? 'success' : session.status === 'cancelled' ? 'danger' : 'warning'}`}>
                      {session.status}
                    </span>
                  </td>
                  <td>
                    {session.feedback ? (
                      <div>
                        <strong>Rating: {session.feedback.rating}/5</strong>
                        {session.feedback.strengths && <p className="mb-0 small text-success">✓ {session.feedback.strengths}</p>}
                        {session.feedback.improvements && <p className="mb-0 small text-warning">↑ {session.feedback.improvements}</p>}
                      </div>
                    ) : (
                      <span className="text-muted">Pending</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default IntervieweeSessions;
