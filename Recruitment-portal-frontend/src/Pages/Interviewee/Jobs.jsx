import { useState } from "react";
import { jobs } from "../../Data/JobsData";

function Jobs() {
  const [searchTerm, setSearchTerm] = useState("");
  const [appliedJobs, setAppliedJobs] = useState(() => {
    const loggedIn = JSON.parse(localStorage.getItem("loggedInUser"));
    const allApplications = JSON.parse(localStorage.getItem("applications")) || [];
    return allApplications.filter(app => app.userId === loggedIn?.email).map(app => app.jobId);
  });

  const handleApply = (jobId) => {
    const loggedIn = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!loggedIn) return;

    const allApplications = JSON.parse(localStorage.getItem("applications")) || [];
    
    // Check if already applied
    if (allApplications.some(app => app.userId === loggedIn.email && app.jobId === jobId)) {
      alert("You have already applied for this job.");
      return;
    }

    allApplications.push({
      id: Date.now(),
      userId: loggedIn.email,
      jobId: jobId,
      date: new Date().toISOString(),
      status: "Applied"
    });

    localStorage.setItem("applications", JSON.stringify(allApplications));
    setAppliedJobs([...appliedJobs, jobId]);
    alert("Application submitted successfully!");
  };

  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.skills.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="py-4">
      <h2 className="mb-4">Job Openings</h2>
      
      <div className="row mb-4">
        <div className="col-md-6">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Search jobs by title or skills..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="row">
        {filteredJobs.map(job => (
          <div key={job.id} className="col-md-6 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <h5 className="card-title text-primary">{job.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{job.companyName}</h6>
                  </div>
                  <span className="badge bg-light text-dark border">{job.type}</span>
                </div>
                
                <p className="card-text mt-3">{job.description}</p>
                
                <div className="mb-3">
                  <small className="text-muted"><i className="bi bi-geo-alt me-1"></i> {job.location}</small>
                  <span className="mx-2">•</span>
                  <small className="text-muted">Posted: {job.postedOn}</small>
                </div>

                <div className="mb-3">
                  <strong>Skills:</strong> <span className="text-info">{job.skills}</span>
                </div>

                {appliedJobs.includes(job.id) ? (
                  <button className="btn btn-secondary w-100" disabled>
                    <i className="bi bi-check-circle me-2"></i> Applied
                  </button>
                ) : (
                  <button 
                    className="btn btn-primary w-100"
                    onClick={() => handleApply(job.id)}
                  >
                    Apply Now
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
        
        {filteredJobs.length === 0 && (
          <div className="col-12 text-center text-muted">
            No jobs found matching your search.
          </div>
        )}
      </div>
    </div>
  );
}

export default Jobs;
