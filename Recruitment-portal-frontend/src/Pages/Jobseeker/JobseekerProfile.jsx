import { useState } from "react";
import JobseekerNavbar from "../../Components/JobseekerNavbar";

function Profile() {
  const [profile] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+91 9876543210",
    location: "Hyderabad, India",
    role: "Frontend Developer",
    skills: ["React", "Node.js", "SQL", "JavaScript"],
    experience: "2 years at TechCorp Pvt Ltd",
    education: "B.Tech in Computer Science, 2021"
  });

  return (
    <>
      <JobseekerNavbar />
      <div className="container my-5">
        {/* Profile Header */}
        <div className="card shadow-sm border-0 p-4 mb-4 text-center">
          <img
            src="https://via.placeholder.com/100"
            alt="profile"
            className="rounded-circle mb-3"
          />
          <h3 className="fw-bold">{profile.name}</h3>
          <p className="text-muted mb-1">{profile.role}</p>
          <p className="small text-muted">
            {profile.location} • {profile.phone}
          </p>
          <button className="btn btn-sm btn-outline-primary mt-2">
            Edit Profile
          </button>
        </div>

        {/* Profile Details */}
        <div className="row g-4">
          {/* Left Column */}
          <div className="col-md-6">
            <div className="card shadow-sm border-0 p-4 h-100">
              <h5 className="fw-semibold mb-3">Contact Information</h5>
              <p><strong>Email:</strong> {profile.email}</p>
              <p><strong>Phone:</strong> {profile.phone}</p>
              <p><strong>Location:</strong> {profile.location}</p>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-md-6">
            <div className="card shadow-sm border-0 p-4 h-100">
              <h5 className="fw-semibold mb-3">Professional Details</h5>
              <p><strong>Experience:</strong> {profile.experience}</p>
              <p><strong>Education:</strong> {profile.education}</p>
              <div>
                <strong>Skills:</strong>
                <div className="mt-2">
                  {profile.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="badge bg-primary me-2 mb-2"
                      style={{ fontSize: "0.9rem" }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
