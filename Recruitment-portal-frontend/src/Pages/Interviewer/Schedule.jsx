import { useState, useEffect } from "react";

function InterviewerSchedule() {
  const [slots, setSlots] = useState([]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [duration, setDuration] = useState(30);

  const loadSlots = () => {
    const loggedIn = JSON.parse(localStorage.getItem("loggedInUser"));
    const allSlots = JSON.parse(localStorage.getItem("availability")) || [];
    const my = allSlots.filter(s => s.interviewerEmail === loggedIn?.email);
    setSlots(my.sort((a,b) => new Date(a.date + ' ' + a.time) - new Date(b.date + ' ' + b.time)));
  };

  useEffect(() => { loadSlots(); }, []);

  const addSlot = () => {
    if (!date || !time) {
      alert("Please provide date and time for the slot.");
      return;
    }

    const loggedIn = JSON.parse(localStorage.getItem("loggedInUser"));
    const allSlots = JSON.parse(localStorage.getItem("availability")) || [];
    const newSlot = {
      id: Date.now().toString(),
      interviewerEmail: loggedIn.email,
      interviewerName: loggedIn.name,
      date,
      time,
      duration,
      createdAt: new Date().toISOString(),
    };

    allSlots.push(newSlot);
    localStorage.setItem("availability", JSON.stringify(allSlots));
    setDate(""); setTime(""); setDuration(30);
    loadSlots();
  };

  const removeSlot = (id) => {
    const allSlots = JSON.parse(localStorage.getItem("availability")) || [];
    const updated = allSlots.filter(s => s.id !== id);
    localStorage.setItem("availability", JSON.stringify(updated));
    loadSlots();
  };

  // Also show booked sessions for this interviewer
  const [sessions, setSessions] = useState([]);
  const loadSessions = () => {
    const loggedIn = JSON.parse(localStorage.getItem("loggedInUser"));
    const all = JSON.parse(localStorage.getItem("sessions")) || [];
    setSessions(all.filter(s => s.interviewerEmail === loggedIn?.email).sort((a,b) => new Date(a.scheduledDate + ' ' + a.scheduledTime) - new Date(b.scheduledDate + ' ' + b.scheduledTime)));
  };

  useEffect(() => { loadSessions(); }, []);

  return (
    <div className="py-4">
      <h2 className="mb-4">Manage Schedule</h2>

      <div className="card mb-4">
        <div className="card-body">
          <h5>Add Availability Slot</h5>
          <div className="row g-2 align-items-end">
            <div className="col-md-3">
              <label className="form-label">Date</label>
              <input type="date" className="form-control" value={date} onChange={e=>setDate(e.target.value)} />
            </div>
            <div className="col-md-3">
              <label className="form-label">Time</label>
              <input type="time" className="form-control" value={time} onChange={e=>setTime(e.target.value)} />
            </div>
            <div className="col-md-3">
              <label className="form-label">Duration (mins)</label>
              <input type="number" min="15" step="15" className="form-control" value={duration} onChange={e=>setDuration(parseInt(e.target.value)||30)} />
            </div>
            <div className="col-md-3">
              <button className="btn btn-primary w-100" onClick={addSlot}>Add Slot</button>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <h5>My Available Slots</h5>
          {slots.length === 0 ? (
            <div className="alert alert-info">No availability slots. Add some to let interviewees book.</div>
          ) : (
            <div className="list-group">
              {slots.map(s => (
                <div key={s.id} className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    <strong>{s.date}</strong> at <span className="ms-1">{s.time}</span>
                    <div className="text-muted small">{s.duration} mins</div>
                  </div>
                  <div>
                    <button className="btn btn-sm btn-outline-danger" onClick={()=>removeSlot(s.id)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="col-md-6">
          <h5>Booked Sessions</h5>
          {sessions.length === 0 ? (
            <div className="alert alert-info">No booked sessions.</div>
          ) : (
            <div className="list-group">
              {sessions.map(s => (
                <div key={s.id} className="list-group-item">
                  <div className="d-flex justify-content-between">
                    <div>
                      <strong>{s.intervieweeName}</strong>
                      <div className="text-muted small">{s.scheduledDate} — {s.scheduledTime} ({s.status})</div>
                    </div>
                    <div>
                      <span className={`badge bg-${s.status === 'completed' ? 'success' : s.status === 'cancelled' ? 'danger' : 'warning'}`}>{s.status}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default InterviewerSchedule;
