import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function IntervieweeSessions() {
  const [sessions, setSessions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = JSON.parse(localStorage.getItem("loggedInUser"));
    const allSessions = JSON.parse(localStorage.getItem("sessions")) || [];
    const mySessions = allSessions.filter(s => s.intervieweeEmail === loggedIn?.email);
    setSessions(mySessions.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
  }, []);

  const joinCall = (sessionId) => {
    navigate(`/video-call/${sessionId}`);
  };

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
                <th>Action</th>
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
                    {session.status === 'scheduled' && (
                       <button className="btn btn-sm btn-success" onClick={() => joinCall(session.id)}>
                         <i className="bi bi-camera-video me-1"></i> Join Call
                       </button>
                    )}
                  </td>
                  <td>
                    {session.feedback ? (
                      <div style={{ fontSize: "0.85rem" }}>
                        <div className="mb-1">
                          <strong>Overall: {session.feedback.rating}/5</strong>
                          <span className={`badge ms-2 bg-${session.feedback.recommendation?.includes('Hire') ? 'success' : 'secondary'}`}>
                            {session.feedback.recommendation}
                          </span>
                        </div>
                        <div className="d-flex gap-2 mb-1 text-muted">
                          <span>Tech: {session.feedback.technicalScore}</span>
                          <span>Comm: {session.feedback.communicationScore}</span>
                          <span>Prob: {session.feedback.problemSolvingScore}</span>
                        </div>
                        {session.feedback.strengths && <div className="text-success">✓ {session.feedback.strengths}</div>}
                        {session.feedback.improvements && <div className="text-warning">↑ {session.feedback.improvements}</div>}
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
