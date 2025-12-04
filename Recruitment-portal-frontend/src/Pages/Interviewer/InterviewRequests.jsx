import { useState, useEffect } from "react";

function InterviewRequests() {
  const [sessions, setSessions] = useState([]);

  const loadSessions = () => {
    const loggedIn = JSON.parse(localStorage.getItem("loggedInUser"));
    const allSessions = JSON.parse(localStorage.getItem("sessions")) || [];
    const mySessions = allSessions.filter(
      s => s.interviewerEmail === loggedIn?.email && s.status === "scheduled"
    );
    setSessions(mySessions);
  };

  useEffect(() => {
    loadSessions();
  }, []);

  const handleAction = (sessionId, action) => {
    const allSessions = JSON.parse(localStorage.getItem("sessions")) || [];
    const idx = allSessions.findIndex(s => s.id === sessionId);
    
    if (idx !== -1) {
      if (action === "start") {
        alert("Starting video call... (Video call feature would open here)");
      } else if (action === "cancel") {
        allSessions[idx].status = "cancelled";
        localStorage.setItem("sessions", JSON.stringify(allSessions));
        loadSessions();
      }
    }
  };

  return (
    <div className="py-4">
      <h2 className="mb-4">Interview Requests</h2>

      {sessions.length === 0 ? (
        <div className="alert alert-info">No pending interview requests.</div>
      ) : (
        <div className="row">
          {sessions.map((session, idx) => (
            <div key={idx} className="col-md-6 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{session.intervieweeName}</h5>
                  <p className="mb-1"><strong>Date:</strong> {session.scheduledDate}</p>
                  <p className="mb-1"><strong>Time:</strong> {session.scheduledTime}</p>
                  <p className="mb-3">
                    <span className="badge bg-warning">Scheduled</span>
                  </p>
                  <div className="d-flex gap-2">
                    <button 
                      className="btn btn-success"
                      onClick={() => handleAction(session.id, "start")}
                    >
                      Start Interview
                    </button>
                    <button 
                      className="btn btn-outline-danger"
                      onClick={() => handleAction(session.id, "cancel")}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default InterviewRequests;
