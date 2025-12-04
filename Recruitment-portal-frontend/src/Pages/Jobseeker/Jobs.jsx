import { useState, useEffect } from "react";
import JobseekerNavbar from "../../Components/JobseekerNavbar";
import JobCard from "../../Components/JobCard"; // adjust path if your project uses Shared/JobCard
import { jobs as mockJobs } from "../../Data/JobsData";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // load mock jobs
    setJobs(mockJobs);
  }, []);

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(search.toLowerCase()) ||
    (job.company || job.companyName || "").toLowerCase().includes(search.toLowerCase()) ||
    job.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <JobseekerNavbar />
      <div className="container my-5">
        <h2 className="mb-4 text-center">Available Jobs</h2>

        <div className="row mb-4 justify-content-center">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title, company, or location..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div key={job.id} className="col-md-6 col-lg-4 mb-4">
                <JobCard job={job} />
              </div>
            ))
          ) : (
            <p className="text-center text-muted">No jobs found.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Jobs;
