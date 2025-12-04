import { useState, useEffect } from "react";

function FindInterviewer() {
  const [interviewers, setInterviewers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [skillFilter, setSkillFilter] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedInterviewer, setSelectedInterviewer] = useState(null);
  const [scheduleDate, setScheduleDate] = useState("");
  const [scheduleTime, setScheduleTime] = useState("");

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const interviewerList = users.filter(u => u.role === "interviewer");
    setInterviewers(interviewerList);
    setFiltered(interviewerList);
  }, []);

  const handleFilter = (skill) => {
    setSkillFilter(skill);
    if (!skill) {
      setFiltered(interviewers);
    } else {
      setFiltered(interviewers.filter(i => 
        i.skills?.toLowerCase().includes(skill.toLowerCase())
      ));
    }
  };

  const openScheduleModal = (interviewer) => {
    setSelectedInterviewer(interviewer);
    setShowModal(true);
  };

  const handleSchedule = () => {
    if (!scheduleDate || !scheduleTime) {
      alert("Please select date and time");
      return;
    }

    const loggedIn = JSON.parse(localStorage.getItem("loggedInUser"));
    const sessions = JSON.parse(localStorage.getItem("sessions")) || [];

    const newSession = {
      id: Date.now(),
      interviewerEmail: selectedInterviewer.email,
      interviewerName: selectedInterviewer.name,
      intervieweeEmail: loggedIn.email,
      intervieweeName: loggedIn.name,
      scheduledDate: scheduleDate,
      scheduledTime: scheduleTime,
      status: "scheduled",
      feedback: null,
      createdAt: new Date().toISOString()
    };

    sessions.push(newSession);
    localStorage.setItem("sessions", JSON.stringify(sessions));

    alert("Interview scheduled successfully!");
    setShowModal(false);
    setScheduleDate("");
    setScheduleTime("");
  };

  return (
    <div className="py-4">
      <h2 className="mb-4">Find an Interviewer</h2>

      <div className="row mb-4">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Filter by skills (e.g., JavaScript, React)"
            value={skillFilter}
            onChange={(e) => handleFilter(e.target.value)}
          />
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="alert alert-info">No interviewers found. Check back later!</div>
      ) : (
        <div className="row">
          {filtered.map((interviewer, idx) => (
            <div key={idx} className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{interviewer.name}</h5>
                  <p className="card-text text-muted">{interviewer.email}</p>
                  {interviewer.skills && (
                    <p><strong>Skills:</strong> {interviewer.skills}</p>
                  )}
                  {interviewer.experience && (
                    <p><strong>Experience:</strong> {interviewer.experience}</p>
                  )}
                  {interviewer.availability && (
                    <p><strong>Available:</strong> {interviewer.availability}</p>
                  )}
                  <button 
                    className="btn btn-primary w-100"
                    onClick={() => openScheduleModal(interviewer)}
                  >
                    Request Interview
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {showModal && (
        <div className="modal show d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Schedule Interview with {selectedInterviewer?.name}</h5>
                <button className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Date</label>
                  <input 
                    type="date" 
                    className="form-control"
                    value={scheduleDate}
                    onChange={(e) => setScheduleDate(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Time</label>
                  <input 
                    type="time" 
                    className="form-control"
                    value={scheduleTime}
                    onChange={(e) => setScheduleTime(e.target.value)}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
                <button className="btn btn-primary" onClick={handleSchedule}>Confirm Booking</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FindInterviewer;
