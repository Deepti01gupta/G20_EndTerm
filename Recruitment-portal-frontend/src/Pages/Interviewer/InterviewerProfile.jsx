import { useState, useEffect } from "react";

function InterviewerProfile() {
  const [user, setUser] = useState({ name: "", email: "", skills: "", experience: "", availability: "" });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const loggedIn = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedIn) setUser(loggedIn);
  }, []);

  const handleSave = (e) => {
    e.preventDefault();
    
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const idx = users.findIndex(u => u.email === user.email);
    if (idx !== -1) {
      users[idx] = { ...users[idx], ...user };
      localStorage.setItem("users", JSON.stringify(users));
    }
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="py-4">
      <h2 className="mb-4">My Profile</h2>

      {saved && <div className="alert alert-success">Profile updated!</div>}

      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSave}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={user.name}
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" value={user.email} disabled />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Skills / Expertise (comma separated)</label>
              <input
                type="text"
                className="form-control"
                placeholder="e.g., JavaScript, System Design, DSA"
                value={user.skills || ""}
                onChange={(e) => setUser({ ...user, skills: e.target.value })}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Years of Experience</label>
              <select
                className="form-select"
                value={user.experience || ""}
                onChange={(e) => setUser({ ...user, experience: e.target.value })}
              >
                <option value="">Select</option>
                <option value="1-3 years">1-3 years</option>
                <option value="3-5 years">3-5 years</option>
                <option value="5-10 years">5-10 years</option>
                <option value="10+ years">10+ years</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Availability</label>
              <select
                className="form-select"
                value={user.availability || ""}
                onChange={(e) => setUser({ ...user, availability: e.target.value })}
              >
                <option value="">Select</option>
                <option value="Weekdays">Weekdays</option>
                <option value="Weekends">Weekends</option>
                <option value="Evenings">Evenings Only</option>
                <option value="Flexible">Flexible</option>
              </select>
            </div>

            <button type="submit" className="btn btn-success">Save Profile</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default InterviewerProfile;
