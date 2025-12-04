import { useEffect, useState } from "react";
import JobseekerNavbar from "../../Components/JobseekerNavbar";
import ApplicationCard from "../../Components/ApplicationCard"; // adjust path

function MyApplications() {
  const [applications, setApplications] = useState([]);
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem("loggedInUser")); } catch { return null; }
  });

  useEffect(() => {
    // load applications for logged-in user
    const all = JSON.parse(localStorage.getItem("applications")) || [];
    if (user) {
      const mine = all.filter(a => a.applicantEmail === user.email);
      setApplications(mine);
    } else {
      setApplications([]);
    }
  }, [user]);

  return (
    <>
      <JobseekerNavbar />
      <div className="container my-5">
        <div className="text-center mb-4">
          <h2 className="fw-bold">My Applications</h2>
          <p className="text-muted">Track status of the jobs you applied to.</p>
        </div>

        {applications.length === 0 ? (
          <div className="text-center py-5">
            <h5 className="text-muted">You haven’t applied for any jobs yet.</h5>
            <p>Find jobs on the Jobs page and click Apply.</p>
          </div>
        ) : (
          <div className="row g-4">
            {applications.map((app) => (
              <div key={app.id} className="col-md-6 col-lg-4">
                {/* ApplicationCard should accept 'application' prop */}
                <ApplicationCard application={app} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default MyApplications;
