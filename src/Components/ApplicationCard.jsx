function ApplicationCard({ application }) {
  const statusColors = {
    "Under Review": "warning",
    "Rejected": "danger",
    "Accepted": "success"
  };

  return (
    <div className="card shadow-sm border-0 h-100">
      <div className="card-body">
        {/* Job Title + Status */}
        <div className="d-flex justify-content-between align-items-start mb-2">
          <h5 className="card-title fw-bold mb-0">{application.jobTitle}</h5>
          <span className={`badge bg-${statusColors[application.status] || "secondary"}`}>
            {application.status}
          </span>
        </div>

        {/* Company Info */}
        <p className="text-muted mb-1">
          <strong>Company:</strong> {application.company}
        </p>

        {/* Applied Date */}
        {application.appliedOn && (
          <p className="small text-muted mb-3">
            Applied on: {application.appliedOn}
          </p>
        )}

        {/* Actions */}
        <button className="btn btn-sm btn-outline-primary w-100">
          View Details
        </button>
      </div>
    </div>
  );
}

export default ApplicationCard;
