import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function IntervieweeSessions() {
  const [sessions, setSessions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function load() {
      try {
        const data = await getMySessions();
        setSessions(data.sessions || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const joinCall = (sessionId) => {
    navigate(`/video-call/${sessionId}`);
  };

  return (
    <div className="max-w-4xl mx-auto mt-6">
      <h1 className="text-2xl font-bold mb-4">My Interview Sessions</h1>

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

      <div className="space-y-5">
        {sessions.map((s) => (
          <div key={s._id} className="border border-gray-300 rounded-lg p-4 shadow">
            <h2 className="text-lg font-semibold">{s.interviewerName}</h2>
            <p className="text-sm text-gray-600">
              {s.date} • {s.time}
            </p>

            {s.meetLink && (
              <a href={s.meetLink} target="_blank" className="inline-block mt-2">
                <button className="bg-blue-600 text-white px-3 py-1 rounded">Join Meeting</button>
              </a>
            )}

            {/* ⭐ Rating */}
            <div className="mt-4">
              <label className="font-medium">Rating</label>
              <select
                className="w-full border mt-1 p-2 rounded"
                value={feedbackData[s._id]?.rating || ""}
                onChange={(e) => updateFeedback(s._id, "rating", Number(e.target.value))}
              >
                <option value="">Select Rating</option>
                {[5, 4, 3, 2, 1].map((r) => (
                  <option key={r} value={r}>{r} Stars</option>
                ))}
              </select>
            </div>

            {/* 📝 Feedback */}
            <div className="mt-2">
              <label className="font-medium">Feedback</label>
              <textarea
                rows="3"
                className="w-full border mt-1 p-2 rounded"
                placeholder="Write your feedback..."
                value={feedbackData[s._id]?.comment || ""}
                onChange={(e) => updateFeedback(s._id, "comment", e.target.value)}
              ></textarea>
            </div>

            <button
              className="mt-3 bg-green-600 text-white px-4 py-2 rounded"
              onClick={() => sendFeedback(s._id)}
            >
              Submit Feedback
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
