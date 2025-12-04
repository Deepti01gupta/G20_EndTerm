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

  const handleAutoMatch = () => {
    const loggedIn = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!loggedIn.skills) {
      alert("Please update your profile with skills first to use Auto Match.");
      return;
    }

    const userSkills = loggedIn.skills.toLowerCase().split(",").map(s => s.trim());
    const matched = interviewers.filter(i => 
      i.skills && userSkills.some(skill => i.skills.toLowerCase().includes(skill))
    );

    if (matched.length > 0) {
      // Pick a random one from matches
      const randomMatch = matched[Math.floor(Math.random() * matched.length)];
      alert(`We found a match for you! ${randomMatch.name} matches your skills.`);
      openScheduleModal(randomMatch);
    } else {
      alert("No matching interviewers found for your skills. Try manual search.");
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

    const selectedDateTime = new Date(`${scheduleDate}T${scheduleTime}`);
    if (selectedDateTime < new Date()) {
      alert("Please select a future date and time.");
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

    // Create Notification for Interviewer
    const notifications = JSON.parse(localStorage.getItem("notifications")) || [];
    notifications.push({
      id: Date.now(),
      userId: selectedInterviewer.email,
      message: `New interview request from ${loggedIn.name} for ${scheduleDate} at ${scheduleTime}`,
      type: "request",
      read: false,
      date: new Date().toISOString()
    });
    localStorage.setItem("notifications", JSON.stringify(notifications));

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
        <div className="col-md-6 text-end">
          <button className="btn btn-success" onClick={handleAutoMatch}>
            <i className="bi bi-magic me-2"></i> Auto Match Me
          </button>
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
