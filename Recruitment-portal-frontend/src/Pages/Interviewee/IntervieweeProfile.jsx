import { useState, useEffect } from "react";

function IntervieweeProfile() {
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

      {saved && <div className="alert alert-success">Profile saved!</div>}

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
                <input
                  type="email"
                  className="form-control"
                  value={user.email}
                  disabled
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Skills (comma separated)</label>
              <input
                type="text"
                className="form-control"
                placeholder="e.g., JavaScript, React, Node.js"
                value={user.skills || ""}
                onChange={(e) => setUser({ ...user, skills: e.target.value })}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Experience Level</label>
              <select
                className="form-select"
                value={user.experience || ""}
                onChange={(e) => setUser({ ...user, experience: e.target.value })}
              >
                <option value="">Select experience</option>
                <option value="Fresher">Fresher</option>
                <option value="1-2 years">1-2 years</option>
                <option value="3-5 years">3-5 years</option>
                <option value="5+ years">5+ years</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Areas to Improve</label>
              <textarea
                className="form-control"
                rows="3"
                placeholder="What areas do you want to focus on?"
                value={user.areasToImprove || ""}
                onChange={(e) => setUser({ ...user, areasToImprove: e.target.value })}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">Save Profile</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default IntervieweeProfile;
