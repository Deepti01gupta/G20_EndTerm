import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function InterviewerSessions() {
  const [sessions, setSessions] = useState([]);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [currentSession, setCurrentSession] = useState(null);
  const [feedback, setFeedback] = useState({ 
    rating: 3, 
    technicalScore: 3,
    communicationScore: 3,
    problemSolvingScore: 3,
    strengths: "", 
    improvements: "",
    recommendation: "No Hire"
  });
  const navigate = useNavigate();

  const loadSessions = () => {
    const loggedIn = JSON.parse(localStorage.getItem("loggedInUser"));
    const allSessions = JSON.parse(localStorage.getItem("sessions")) || [];
    const mySessions = allSessions.filter(s => s.interviewerEmail === loggedIn?.email);
    setSessions(mySessions.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
  };

  useEffect(() => {
    loadSessions();
  }, []);

  const joinCall = (sessionId) => {
    navigate(`/video-call/${sessionId}`);
  };

  const openFeedback = (session) => {
    setCurrentSession(session);
    setFeedback(session.feedback || { 
      rating: 3, 
      technicalScore: 3,
      communicationScore: 3,
      problemSolvingScore: 3,
      strengths: "", 
      improvements: "",
      recommendation: "No Hire"
    });
    setShowFeedbackModal(true);
  };

  const saveFeedback = () => {
    const allSessions = JSON.parse(localStorage.getItem("sessions")) || [];
    const idx = allSessions.findIndex(s => s.id === currentSession.id);
    
    if (idx !== -1) {
      allSessions[idx].feedback = feedback;
      allSessions[idx].status = "completed";
      localStorage.setItem("sessions", JSON.stringify(allSessions));

      // Notify Interviewee
      const notifications = JSON.parse(localStorage.getItem("notifications")) || [];
      notifications.push({
        id: Date.now(),
        userId: allSessions[idx].intervieweeEmail,
        message: `You received feedback from ${allSessions[idx].interviewerName} for your session on ${allSessions[idx].scheduledDate}.`,
        type: "feedback",
        read: false,
        date: new Date().toISOString()
      });
      localStorage.setItem("notifications", JSON.stringify(notifications));
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
                      <div className="d-flex gap-2">
                        <button className="btn btn-sm btn-success" onClick={() => joinCall(session.id)}>
                          <i className="bi bi-camera-video"></i> Join
                        </button>
                        <button className="btn btn-sm btn-primary" onClick={() => openFeedback(session)}>
                          Complete & Feedback
                        </button>
                      </div>
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
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Overall Rating (1-5)</label>
                    <input
                      type="number"
                      className="form-control"
                      min="1"
                      max="5"
                      value={feedback.rating}
                      onChange={(e) => setFeedback({ ...feedback, rating: parseInt(e.target.value) })}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Technical Skills (1-5)</label>
                    <input
                      type="number"
                      className="form-control"
                      min="1"
                      max="5"
                      value={feedback.technicalScore}
                      onChange={(e) => setFeedback({ ...feedback, technicalScore: parseInt(e.target.value) })}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Communication (1-5)</label>
                    <input
                      type="number"
                      className="form-control"
                      min="1"
                      max="5"
                      value={feedback.communicationScore}
                      onChange={(e) => setFeedback({ ...feedback, communicationScore: parseInt(e.target.value) })}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Problem Solving (1-5)</label>
                    <input
                      type="number"
                      className="form-control"
                      min="1"
                      max="5"
                      value={feedback.problemSolvingScore}
                      onChange={(e) => setFeedback({ ...feedback, problemSolvingScore: parseInt(e.target.value) })}
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Recommendation</label>
                  <select 
                    className="form-select"
                    value={feedback.recommendation}
                    onChange={(e) => setFeedback({ ...feedback, recommendation: e.target.value })}
                  >
                    <option value="No Hire">No Hire</option>
                    <option value="Weak Hire">Weak Hire</option>
                    <option value="Hire">Hire</option>
                    <option value="Strong Hire">Strong Hire</option>
                  </select>
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
