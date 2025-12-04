import React from "react";

function JobCard({ job, mode = "jobseeker", onDelete, onEdit }) {
  return (
    <div className="card mb-3 shadow-sm h-100">
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{job.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{job.company || job.companyName}</h6>

        <p
          className="card-text text-truncate"
          style={{ maxHeight: "3.6em", overflow: "hidden" }}
        >
          {job.description || "No description provided"}
        </p>

        <p className="mb-1"><strong>Location:</strong> {job.location}</p>
        {job.skills && <p className="mb-3"><strong>Skills:</strong> {job.skills}</p>}

        <div className="mt-auto d-flex justify-content-between align-items-center">
          <button className="btn btn-outline-primary btn-sm">View Details</button>

          {job.type && (
            <span className="badge bg-info text-dark">{job.type}</span>
          )}

          {mode === "jobseeker" ? (
            <button className="btn btn-success btn-sm">Apply</button>
          ) : (
            <div className="d-flex gap-2">
              <button
                className="btn btn-warning btn-sm"
                onClick={() => onEdit && onEdit(job)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => onDelete && onDelete(job)}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default JobCard;
