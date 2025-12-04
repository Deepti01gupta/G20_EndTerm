import JobseekerNavbar from "../../Components/JobseekerNavbar";

function Dashboard() {
  return (
    <>
      <JobseekerNavbar />
      <div className="container my-5">
        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">Jobseeker Dashboard</h2>
          <p className="text-muted">
            Welcome back! Here’s a quick overview of your activities.
          </p>
        </div>

        {/* Stats Section */}
        <div className="row g-4 mb-5">
          <div className="col-md-4 col-sm-6">
            <div className="card shadow-sm border-0 text-center p-4 h-100">
              <h5 className="fw-semibold">Jobs Available</h5>
              <p className="display-6 text-success fw-bold mb-0">120+</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="card shadow-sm border-0 text-center p-4 h-100">
              <h5 className="fw-semibold">Applications Submitted</h5>
              <p className="display-6 text-primary fw-bold mb-0">5</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 mx-auto">
            <div className="card shadow-sm border-0 text-center p-4 h-100">
              <h5 className="fw-semibold">Profile Completion</h5>
              <p className="display-6 text-warning fw-bold mb-0">80%</p>
              <div className="progress mt-2" style={{ height: "8px" }}>
                <div
                  className="progress-bar bg-warning"
                  role="progressbar"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Applications */}
        <div className="mb-5">
          <h4 className="fw-semibold mb-3">Recent Applications</h4>
          <div className="list-group shadow-sm">
            <div className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <h6 className="mb-1">Frontend Developer</h6>
                <small className="text-muted">TechCorp Pvt Ltd • Applied 2 days ago</small>
              </div>
              <span className="badge bg-info">Under Review</span>
            </div>
            <div className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <h6 className="mb-1">UI/UX Designer</h6>
                <small className="text-muted">Creative Minds • Applied 1 week ago</small>
              </div>
              <span className="badge bg-success">Shortlisted</span>
            </div>
            <div className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <h6 className="mb-1">Backend Engineer</h6>
                <small className="text-muted">CloudWorks • Applied 2 weeks ago</small>
              </div>
              <span className="badge bg-danger">Rejected</span>
            </div>
          </div>
        </div>

        {/* Recommended Jobs */}
        <div>
          <h4 className="fw-semibold mb-3">Recommended Jobs</h4>
          <div className="row g-4">
            <div className="col-md-4 col-sm-6">
              <div className="card shadow-sm border-0 p-3 h-100">
                <h6 className="fw-bold">Full Stack Developer</h6>
                <p className="text-muted mb-1">Innovate Labs</p>
                <p className="small text-muted">Bangalore, India</p>
                <button className="btn btn-sm btn-primary">Apply Now</button>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="card shadow-sm border-0 p-3 h-100">
                <h6 className="fw-bold">Data Analyst</h6>
                <p className="text-muted mb-1">DataVision</p>
                <p className="small text-muted">Hyderabad, India</p>
                <button className="btn btn-sm btn-primary">Apply Now</button>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="card shadow-sm border-0 p-3 h-100">
                <h6 className="fw-bold">DevOps Engineer</h6>
                <p className="text-muted mb-1">Cloudify Solutions</p>
                <p className="small text-muted">Remote</p>
                <button className="btn btn-sm btn-primary">Apply Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
