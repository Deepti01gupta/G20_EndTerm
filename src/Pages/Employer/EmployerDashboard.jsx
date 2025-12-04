import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function EmployerDashboard() {
  const [stats, setStats] = useState({
    jobs: 0,
    applications: 0,
    interviews: 0,
  });
  const [recentApps, setRecentApps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fake API (replace with backend later)
        const jobsRes = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5");
        const appsRes = await axios.get("https://jsonplaceholder.typicode.com/comments?_limit=5");

        setStats({
          jobs: jobsRes.data.length,
          applications: appsRes.data.length,
          interviews: 2, // demo static value
        });

        setRecentApps(
          appsRes.data.map((app) => ({
            id: app.id,
            name: app.name,
            email: app.email,
            status: ["Pending", "Interview", "Rejected", "Hired"][
              Math.floor(Math.random() * 4)
            ],
          }))
        );
      } catch (err) {
        console.error("Error fetching dashboard data", err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <p className="text-center mt-5">Loading dashboard...</p>;

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Employer Dashboard</h2>

      {/* Stats Cards */}
      <div className="row mb-4">
        <div className="col-md-4 mb-3">
          <div className="card shadow-sm p-3 text-center">
            <h5>Total Jobs</h5>
            <h3>{stats.jobs}</h3>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card shadow-sm p-3 text-center">
            <h5>Total Applications</h5>
            <h3>{stats.applications}</h3>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card shadow-sm p-3 text-center">
            <h5>Interviews Scheduled</h5>
            <h3>{stats.interviews}</h3>
          </div>
        </div>
      </div>

      {/* Recent Applications */}
      <div className="card shadow-sm p-3">
        <h5 className="mb-3">Recent Applications</h5>
        {recentApps.length === 0 ? (
          <p>No recent applications.</p>
        ) : (
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Candidate</th>
                <th>Email</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentApps.map((app) => (
                <tr key={app.id}>
                  <td>{app.name}</td>
                  <td>{app.email}</td>
                  <td>
                    <span
                      className={`badge ${
                        app.status === "Hired"
                          ? "bg-success"
                          : app.status === "Rejected"
                          ? "bg-danger"
                          : app.status === "Interview"
                          ? "bg-info"
                          : "bg-secondary"
                      }`}
                    >
                      {app.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <div className="text-end">
          <Link to="/employer/manage-applications" className="btn btn-primary btn-sm">
            Manage Applications
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EmployerDashboard;
