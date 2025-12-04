import { useState } from "react";

function EmployerSettings() {
  const [settings, setSettings] = useState({
    notifications: true,
    autoApprove: false,
    showProfilePublic: true,
    darkMode: false,
  });

  const handleToggle = (key) => {
    setSettings({ ...settings, [key]: !settings[key] });
  };

  const handleSave = () => {
    console.log("Saved Employer Settings:", settings);
    // TODO: API PUT /api/employer/settings
    alert("Settings updated successfully!");
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">Employer Settings</h2>

      <div className="card shadow-sm p-4 mx-auto" style={{ maxWidth: "650px" }}>
        <div className="mb-3">
          <h5>Preferences</h5>
          <hr />
          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="notifications"
              checked={settings.notifications}
              onChange={() => handleToggle("notifications")}
            />
            <label className="form-check-label" htmlFor="notifications">
              Email Notifications
            </label>
          </div>

          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="autoApprove"
              checked={settings.autoApprove}
              onChange={() => handleToggle("autoApprove")}
            />
            <label className="form-check-label" htmlFor="autoApprove">
              Auto-Approve Applications
            </label>
          </div>

          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="showProfilePublic"
              checked={settings.showProfilePublic}
              onChange={() => handleToggle("showProfilePublic")}
            />
            <label className="form-check-label" htmlFor="showProfilePublic">
              Show Company Profile Publicly
            </label>
          </div>

          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="darkMode"
              checked={settings.darkMode}
              onChange={() => handleToggle("darkMode")}
            />
            <label className="form-check-label" htmlFor="darkMode">
              Enable Dark Mode
            </label>
          </div>
        </div>

        <div className="text-center mt-4">
          <button className="btn btn-warning px-4" onClick={handleSave}>
            Save Changes
          </button>
        </div>
      </div>

      <div className="card shadow-sm p-4 mx-auto mt-4" style={{ maxWidth: "650px" }}>
        <h5>Account Management</h5>
        <hr />
        <div className="d-flex justify-content-between">
          <button className="btn btn-outline-primary">Change Password</button>
          <button className="btn btn-outline-danger">Deactivate Account</button>
        </div>
      </div>
    </div>
  );
}

export default EmployerSettings;
