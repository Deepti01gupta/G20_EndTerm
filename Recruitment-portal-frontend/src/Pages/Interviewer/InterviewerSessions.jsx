import { useState, useEffect } from "react";

function InterviewerSessions() {
  const [sessions, setSessions] = useState([]);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [currentSession, setCurrentSession] = useState(null);
  const [feedback, setFeedback] = useState({ rating: 3, strengths: "", improvements: "" });

  const loadSessions = () => {
    const loggedIn = JSON.parse(localStorage.getItem("loggedInUser"));
    const allSessions = JSON.parse(localStorage.getItem("sessions")) || [];
    const mySessions = allSessions.filter(s => s.interviewerEmail === loggedIn?.email);
    setSessions(mySessions.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
  };

  useEffect(() => {
    loadSessions();
  }, []);

  const openFeedback = (session) => {
    setCurrentSession(session);
    setFeedback(session.feedback || { rating: 3, strengths: "", improvements: "" });
    setShowFeedbackModal(true);
  };

  const saveFeedback = () => {
    const allSessions = JSON.parse(localStorage.getItem("sessions")) || [];
    const idx = allSessions.findIndex(s => s.id === currentSession.id);
    
    if (idx !== -1) {
      allSessions[idx].feedback = feedback;
      allSessions[idx].status = "completed";
      localStorage.setItem("sessions", JSON.stringify(allSessions));
    }
    
    setShowFeedbackModal(false);
    loadSessions();
    alert("Feedback submitted!");
  };

  return (
    <div className="py-4">
      <h2 className="mb-4">My Sessions</h2>

      {sessions.length === 0 ? (
        <div className="alert alert-info">No sessions yet.</div>
      ) : (
        <div className="table-responsive">
          <table className="table table-hover">
            <thead className="table-dark">
              <tr>
                <th>Interviewee</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {sessions.map((session, idx) => (
                <tr key={idx}>
                  <td>{session.intervieweeName}</td>
                  <td>{session.scheduledDate}</td>
                  <td>{session.scheduledTime}</td>
                  <td>
                    <span className={`badge bg-${session.status === 'completed' ? 'success' : session.status === 'cancelled' ? 'danger' : 'warning'}`}>
                      {session.status}
                    </span>
                  </td>
                  <td>
                    {session.status === "scheduled" && (
                      <button className="btn btn-sm btn-primary" onClick={() => openFeedback(session)}>
                        Complete & Feedback
                      </button>
                    )}
                    {session.status === "completed" && (
                      <button className="btn btn-sm btn-outline-secondary" onClick={() => openFeedback(session)}>
                        View/Edit Feedback
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {showFeedbackModal && (
        <div className="modal show d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Feedback for {currentSession?.intervieweeName}</h5>
                <button className="btn-close" onClick={() => setShowFeedbackModal(false)}></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Rating (1-5)</label>
                  <input
                    type="range"
                    className="form-range"
                    min="1"
                    max="5"
                    value={feedback.rating}
                    onChange={(e) => setFeedback({ ...feedback, rating: parseInt(e.target.value) })}
                  />
                  <div className="text-center fw-bold">{feedback.rating} / 5</div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Strengths</label>
                  <textarea
                    className="form-control"
                    rows="2"
                    placeholder="What did they do well?"
                    value={feedback.strengths}
                    onChange={(e) => setFeedback({ ...feedback, strengths: e.target.value })}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label className="form-label">Areas for Improvement</label>
                  <textarea
                    className="form-control"
                    rows="2"
                    placeholder="What can they improve?"
                    value={feedback.improvements}
                    onChange={(e) => setFeedback({ ...feedback, improvements: e.target.value })}
                  ></textarea>
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setShowFeedbackModal(false)}>Cancel</button>
                <button className="btn btn-success" onClick={saveFeedback}>Submit Feedback</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default InterviewerSessions;
