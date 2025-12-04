import { useState } from "react";
import axios from "axios";

function PostJob() {
  const [job, setJob] = useState({
    title: "",
    description: "",
    location: "",
    skills: "",
    type: "Full-time",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    try {
      // Fake API to simulate saving (replace with your backend API later)
      await axios.post("https://jsonplaceholder.typicode.com/posts", job);

      // Save to localStorage too (so we can fetch in ViewJobs.jsx)
      const existingJobs = JSON.parse(localStorage.getItem("postedJobs")) || [];
      localStorage.setItem("postedJobs", JSON.stringify([...existingJobs, job]));

      setSuccess("Job posted successfully!");
      setJob({
        title: "",
        description: "",
        location: "",
        skills: "",
        type: "Full-time",
      });
    } catch (err) {
      console.error("Error posting job:", err);
      setSuccess("Failed to post job. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">Post a Job</h2>

      <div className="card shadow-sm p-4 mx-auto" style={{ maxWidth: "600px" }}>
        {success && (
          <div
            className={`alert ${
              success.includes("success") ? "alert-success" : "alert-danger"
            }`}
          >
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Job Title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              value={job.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              name="description"
              rows="4"
              value={job.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="mb-3">
            <label className="form-label">Location</label>
            <input
              type="text"
              className="form-control"
              name="location"
              value={job.location}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Required Skills</label>
            <input
              type="text"
              className="form-control"
              name="skills"
              value={job.skills}
              onChange={handleChange}
              placeholder="e.g. React, Node.js, SQL"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Job Type</label>
            <select
              className="form-select"
              name="type"
              value={job.type}
              onChange={handleChange}
            >
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
            </select>
          </div>

          <button
            className="btn btn-primary w-100"
            type="submit"
            disabled={loading}
          >
            {loading ? "Posting..." : "Post Job"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PostJob;
