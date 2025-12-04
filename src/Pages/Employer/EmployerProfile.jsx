import { useState } from "react";

function EmployerProfile() {
  const [profile, setProfile] = useState({
    companyName: "Tech Solutions Inc.",
    email: "hr@techsolutions.com",
    industry: "Software Development",
    location: "Bangalore, India",
    website: "www.techsolutions.com",
    phone: "+91 9876543210",
  });

  const [isEditing, setIsEditing] = useState(false);

  // Handle form changes
  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  // Save changes (later connect with API)
  const handleSave = (e) => {
    e.preventDefault();
    setIsEditing(false);
    console.log("Updated Employer Profile:", profile);
    // TODO: API PUT /api/employer/profile
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">Company Profile</h2>

      <div className="card shadow-sm p-4 mx-auto" style={{ maxWidth: "700px" }}>
        {!isEditing ? (
          <>
            <div className="mb-3">
              <h5>Company Information</h5>
              <hr />
              <p><strong>Company:</strong> {profile.companyName}</p>
              <p><strong>Email:</strong> {profile.email}</p>
              <p><strong>Industry:</strong> {profile.industry}</p>
              <p><strong>Location:</strong> {profile.location}</p>
              <p><strong>Website:</strong> {profile.website}</p>
              <p><strong>Phone:</strong> {profile.phone}</p>
            </div>

            <div className="text-center mt-4">
              <button
                className="btn btn-primary"
                onClick={() => setIsEditing(true)}
              >
                Edit Profile
              </button>
            </div>
          </>
        ) : (
          <form onSubmit={handleSave}>
            <div className="mb-3">
              <label className="form-label">Company Name</label>
              <input
                type="text"
                className="form-control"
                name="companyName"
                value={profile.companyName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={profile.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Industry</label>
              <input
                type="text"
                className="form-control"
                name="industry"
                value={profile.industry}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Location</label>
              <input
                type="text"
                className="form-control"
                name="location"
                value={profile.location}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Website</label>
              <input
                type="text"
                className="form-control"
                name="website"
                value={profile.website}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input
                type="text"
                className="form-control"
                name="phone"
                value={profile.phone}
                onChange={handleChange}
              />
            </div>

            <div className="d-flex justify-content-between">
              <button type="button" className="btn btn-secondary" onClick={() => setIsEditing(false)}>
                Cancel
              </button>
              <button type="submit" className="btn btn-success">
                Save Changes
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default EmployerProfile;
