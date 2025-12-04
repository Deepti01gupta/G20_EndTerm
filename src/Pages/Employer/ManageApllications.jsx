import { useEffect, useState } from "react";
import ApplicationCard from "../Shared/ApplicationCard";

function ManageApplications() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    // Simulated API call
    setApplications([
      {
        id: 1,
        jobTitle: "Frontend Developer",
        applicantName: "Alice Johnson",
        email: "alice@example.com",
        resume: "resume-alice.pdf",
        status: "Under Review",
      },
      {
        id: 2,
        jobTitle: "Backend Engineer",
        applicantName: "Bob Smith",
        email: "bob@example.com",
        resume: "resume-bob.pdf",
        status: "Accepted",
      },
      {
        id: 3,
        jobTitle: "UI/UX Designer",
        applicantName: "Carol Lee",
        email: "carol@example.com",
        resume: "resume-carol.pdf",
        status: "Rejected",
      },
    ]);
  }, []);

  // Handle status update
  const handleStatusChange = (id, newStatus) => {
    setApplications((prevApps) =>
      prevApps.map((app) =>
        app.id === id ? { ...app, status: newStatus } : app
      )
    );
    console.log(`Application ${id} status updated to: ${newStatus}`);
    // TODO: API PATCH /api/employer/applications/:id
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">Manage Applications</h2>

      {applications.length === 0 ? (
        <p className="text-center text-muted">
          No applications received yet.
        </p>
      ) : (
        <div className="row g-4">
          {applications.map((app) => (
            <div className="col-md-4" key={app.id}>
              <ApplicationCard
                app={app}
                onStatusChange={handleStatusChange}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ManageApplications;
