import { useEffect, useState } from "react";
import { getMySessions } from "../../api/scheduleAPI";
import { submitFeedback } from "../../api/feedbackAPI";
import Button from "../../Components/Button"; // adjust if path differs
import Card from "../../Components/Card";     // adjust if path differs
import { Link } from "react-router-dom";

export default function IntervieweeSessions() {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);

  const [feedbackData, setFeedbackData] = useState({});  
  // Example: { "sessionId123": { rating: 5, comment: "Good" } }

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

  const updateFeedback = (sessionId, field, value) => {
    setFeedbackData(prev => ({
      ...prev,
      [sessionId]: { ...prev[sessionId], [field]: value }
    }));
  };

  const sendFeedback = async (sessionId) => {
    const entry = feedbackData[sessionId];
    if (!entry?.rating || !entry?.comment) {
      alert("Please provide both rating and feedback.");
      return;
    }

    try {
      await submitFeedback(sessionId, {
        rating: entry.rating,
        feedback: entry.comment
      });
      alert("Feedback submitted!");
    } catch (err) {
      console.error(err);
      alert("Error submitting feedback");
    }
  };

  if (loading) return <p className="text-center mt-4">Loading sessions...</p>;

  return (
    <div className="max-w-4xl mx-auto mt-6">
      <h1 className="text-2xl font-bold mb-4">My Interview Sessions</h1>

      {sessions.length === 0 && (
        <p className="bg-blue-100 text-blue-800 p-4 rounded-md">
          No sessions yet. <Link to="/find-interviewer" className="underline">Find an interviewer</Link> to book your first session!
        </p>
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
