import { useEffect, useState } from "react";
import JobCard from "../Shared/JobCard";

function ViewJobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // ✅ Simulated API call (can be replaced with real API later)
    setJobs([
      {
        id: 1,
        title: "Frontend Developer",
        company: "TechCorp",
        location: "Remote",
        type: "Full-time",
        postedOn: "2025-09-15",
        skills: "React, JavaScript, CSS",
      },
      {
        id: 2,
        title: "Backend Engineer",
        company: "InnovateX",
        location: "Hyderabad",
        type: "Full-time",
        postedOn: "2025-09-12",
        skills: "Node.js, MongoDB, Express",
      },
      {
        id: 3,
        title: "UI/UX Designer",
        company: "DesignPro",
        location: "Bangalore",
        type: "Contract",
        postedOn: "2025-09-10",
        skills: "Figma, Adobe XD",
      },
    ]);
  }, []);

  // ✅ Delete handler
  const handleDelete = (jobToDelete) => {
    if (window.confirm(`Are you sure you want to delete "${jobToDelete.title}"?`)) {
      setJobs(jobs.filter((job) => job.id !== jobToDelete.id));
      console.log("Deleted Job:", jobToDelete);
      // TODO: Call DELETE API -> /api/employer/jobs/:id
    }
  };

  // ✅ Edit handler (can redirect to edit page or open a modal later)
  const handleEdit = (jobToEdit) => {
    console.log("Edit Job:", jobToEdit);
    // TODO: Navigate to EditJob page with job details prefilled
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">My Posted Jobs</h2>

      {jobs.length === 0 ? (
        <p className="text-center text-muted">You have not posted any jobs yet.</p>
      ) : (
        <div className="row g-4">
          {jobs.map((job) => (
            <div className="col-md-4" key={job.id}>
              <JobCard
                job={job}
                mode="employer"
                onDelete={handleDelete}
                onEdit={handleEdit}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ViewJobs;
