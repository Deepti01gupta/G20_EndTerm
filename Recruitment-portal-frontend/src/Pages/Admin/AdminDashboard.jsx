import { useState, useEffect } from "react";

function AdminDashboard() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    interviewers: 0,
    interviewees: 0,
    totalSessions: 0,
    completedSessions: 0
  });
  const [users, setUsers] = useState([]);
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const allUsers = JSON.parse(localStorage.getItem("users")) || [];
    const allSessions = JSON.parse(localStorage.getItem("sessions")) || [];

    setUsers(allUsers);
    setSessions(allSessions);
    setStats({
      totalUsers: allUsers.length,
      interviewers: allUsers.filter(u => u.role === "interviewer").length,
      interviewees: allUsers.filter(u => u.role === "interviewee").length,
      totalSessions: allSessions.length,
      completedSessions: allSessions.filter(s => s.status === "completed").length
    });
  }, []);

  const deleteUser = (email) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      const updatedUsers = users.filter(u => u.email !== email);
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      setUsers(updatedUsers);
      setStats(prev => ({
        ...prev,
        totalUsers: updatedUsers.length,
        interviewers: updatedUsers.filter(u => u.role === "interviewer").length,
        interviewees: updatedUsers.filter(u => u.role === "interviewee").length
      }));
    }
  };

  const deleteSession = (id) => {
    if (window.confirm("Are you sure you want to delete this session?")) {
      const updatedSessions = sessions.filter(s => s.id !== id);
      localStorage.setItem("sessions", JSON.stringify(updatedSessions));
      setSessions(updatedSessions);
      setStats(prev => ({
        ...prev,
        totalSessions: updatedSessions.length,
        completedSessions: updatedSessions.filter(s => s.status === "completed").length
      }));
    }
  };

  return (
    <div className="py-4">
      <h2 className="mb-4">Admin Dashboard</h2>

      {/* Stats Cards */}
      <div className="row mb-4">
        <div className="col-md-3">
          <div className="card text-white bg-primary mb-3">
            <div className="card-body text-center">
              <h3 className="card-title">{stats.totalUsers}</h3>
              <p className="card-text">Total Users</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-white bg-success mb-3">
            <div className="card-body text-center">
              <h3 className="card-title">{stats.interviewers}</h3>
              <p className="card-text">Interviewers</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-white bg-info mb-3">
            <div className="card-body text-center">
              <h3 className="card-title">{stats.interviewees}</h3>
              <p className="card-text">Interviewees</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-white bg-warning mb-3">
            <div className="card-body text-center">
              <h3 className="card-title">{stats.totalSessions}</h3>
              <p className="card-text">Total Sessions</p>
            </div>
          </div>
        </div>
      </div>

      {/* User Management */}
      <div className="card mb-4">
        <div className="card-header bg-dark text-white">
          <h5 className="mb-0">User Management</h5>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, idx) => (
                  <tr key={idx}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <span className={`badge bg-${user.role === 'interviewer' ? 'success' : 'info'}`}>
                        {user.role}
                      </span>
                    </td>
                    <td>
                      <button 
                        className="btn btn-sm btn-danger"
                        onClick={() => deleteUser(user.email)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
                {users.length === 0 && (
                  <tr>
                    <td colSpan="4" className="text-center">No users found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Session Management */}
      <div className="card">
        <div className="card-header bg-secondary text-white">
          <h5 className="mb-0">All Sessions</h5>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Interviewer</th>
                  <th>Interviewee</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {sessions.map((session, idx) => (
                  <tr key={idx}>
                    <td>{session.interviewerName}</td>
                    <td>{session.intervieweeName}</td>
                    <td>{session.scheduledDate}</td>
                    <td>
                      <span className={`badge bg-${session.status === 'completed' ? 'success' : session.status === 'cancelled' ? 'danger' : 'warning'}`}>
                        {session.status}
                      </span>
                    </td>
                    <td>
                      <button 
                        className="btn btn-sm btn-danger"
                        onClick={() => deleteSession(session.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
                {sessions.length === 0 && (
                  <tr>
                    <td colSpan="5" className="text-center">No sessions found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
