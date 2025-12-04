import React from "react";

function ApplicationCard({ app, onStatusChange }) {
  return (
    <div className="card shadow-sm h-100">
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{app.applicantName}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{app.jobTitle}</h6>
        <p className="mb-1"><strong>Email:</strong> {app.email}</p>
        <p className="mb-1">
          <strong>Resume:</strong>{" "}
          <a href={`/${app.resume}`} download>
            Download
          </a>
        </p>
        <p className="mb-2">
          <strong>Status:</strong>{" "}
          <span
            className={`badge ${
              app.status === "Accepted"
                ? "bg-success"
                : app.status === "Rejected"
                ? "bg-danger"
                : "bg-warning text-dark"
            }`}
          >
            {app.status}
          </span>
        </p>

        {/* Actions */}
        <div className="mt-auto d-flex justify-content-between">
          <button
            className="btn btn-success btn-sm"
            onClick={() => onStatusChange(app.id, "Accepted")}
          >
            Accept
          </button>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => onStatusChange(app.id, "Rejected")}
          >
            Reject
          </button>
          <button
            className="btn btn-secondary btn-sm"
            onClick={() => onStatusChange(app.id, "Under Review")}
          >
            Review
          </button>
        </div>
      </div>
    </div>
  );
}

export default ApplicationCard;
