import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

/**
 * JobCard: shows job info and allows jobseeker to Apply.
 * - If user not logged in -> clicking Apply redirects to /login
 * - Prevents duplicate apply (same user + job)
 * - Stores application in localStorage under key "applications"
 */
function JobCard({ job }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem("loggedInUser")); } catch { return null; }
  });
  const [applied, setApplied] = useState(false);

  useEffect(() => {
    // detect if current user already applied for this job
    try {
      const applications = JSON.parse(localStorage.getItem("applications")) || [];
      const hasApplied = applications.some(a => a.jobId === job.id && a.applicantEmail === (user && user.email));
      setApplied(Boolean(hasApplied));
    } catch {
      setApplied(false);
    }
  }, [job.id, user]);

  const handleApply = () => {
    // require login
    if (!user) {
      navigate("/login");
      return;
    }

    // Only jobseeker can apply
    if (user.role !== "jobseeker") {
      alert("Only jobseekers can apply for jobs from this interface.");
      return;
    }

    const applications = JSON.parse(localStorage.getItem("applications")) || [];

    // check duplicate
    const exists = applications.some(a => a.jobId === job.id && a.applicantEmail === user.email);
    if (exists) {
      alert("You have already applied for this job.");
      setApplied(true);
      return;
    }

    const application = {
      id: Date.now(),
      jobId: job.id,
      jobTitle: job.title,
      company: job.company || job.companyName || "",
      applicantEmail: user.email,
      applicantName: user.name || "",
      appliedOn: new Date().toISOString().slice(0, 10),
      status: "Applied"
    };

    applications.push(application);
    localStorage.setItem("applications", JSON.stringify(applications));
    setApplied(true);
    alert("Application submitted — saved locally.");
  };

  return (
    <div className="card mb-3 shadow-sm h-100">
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{job.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{job.company || job.companyName}</h6>

        <p className="card-text text-truncate" style={{ maxHeight: "3.6em", overflow: "hidden" }}>
          {job.description || "No description provided"}
        </p>

        <p className="mb-1"><strong>Location:</strong> {job.location}</p>
        <p className="mb-2"><strong>Skills:</strong> {job.skills}</p>

        {job.type && <span className="badge bg-info mb-3 align-self-start">{job.type}</span>}

        <div className="mt-auto d-flex justify-content-between gap-2">
          <Link to={`/jobseeker/jobs/${job.id}`} className="btn btn-outline-primary btn-sm">
            View
          </Link>

          {user && user.role === "employer" ? (
            <button className="btn btn-secondary btn-sm" disabled>Apply (employer)</button>
          ) : (
            <button
              className={`btn btn-success btn-sm ${applied ? "disabled" : ""}`}
              onClick={handleApply}
            >
              {applied ? "Applied" : "Apply"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default JobCard;
