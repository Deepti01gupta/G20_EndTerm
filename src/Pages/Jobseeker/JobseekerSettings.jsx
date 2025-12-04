import { useState } from "react";
import JobseekerNavbar from "../../Components/JobseekerNavbar";

function Settings() {
  const [password, setPassword] = useState("");
  const [notifications, setNotifications] = useState(true);

  const handlePasswordChange = (e) => {
    e.preventDefault();
    console.log("Password updated:", password);
  };

  const handleNotificationChange = () => {
    setNotifications(!notifications);
    console.log("Email Notifications:", !notifications);
  };

  const handleDeleteAccount = () => {
    if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      console.log("Account deleted");
    }
  };

  return (
    <>
      <JobseekerNavbar />
      <div className="container my-5">
        <h2 className="mb-4 text-center">Settings</h2>

        {/* Settings Card */}
        <div className="card shadow-sm p-4 mx-auto" style={{ maxWidth: "500px" }}>
          {/* Password Update */}
          <form onSubmit={handlePasswordChange} className="mb-4">
            <div className="mb-3">
              <label className="form-label">New Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button className="btn btn-warning w-100">Update Password</button>
          </form>

          {/* Notifications */}
          <div className="form-check form-switch mb-4">
            <input
              className="form-check-input"
              type="checkbox"
              checked={notifications}
              onChange={handleNotificationChange}
              id="notificationsSwitch"
            />
            <label className="form-check-label" htmlFor="notificationsSwitch">
              Enable Email Notifications
            </label>
          </div>

          {/* Danger Zone */}
          <div className="border-top pt-3">
            <h6 className="text-danger">Danger Zone</h6>
            <button
              type="button"
              className="btn btn-outline-danger w-100"
              onClick={handleDeleteAccount}
            >
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;
