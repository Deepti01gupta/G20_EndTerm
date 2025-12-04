import { useState, useEffect } from "react";

function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);

  const loadNotifications = () => {
    const loggedIn = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!loggedIn) return;

    const allNotifications = JSON.parse(localStorage.getItem("notifications")) || [];
    // Filter notifications for this user
    const myNotifications = allNotifications.filter(n => n.userId === loggedIn.email);
    
    // Sort by date desc
    myNotifications.sort((a, b) => new Date(b.date) - new Date(a.date));

    setNotifications(myNotifications);
    setUnreadCount(myNotifications.filter(n => !n.read).length);
  };

  useEffect(() => {
    loadNotifications();
    // Poll for new notifications every 5 seconds
    const interval = setInterval(loadNotifications, 5000);
    return () => clearInterval(interval);
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
    if (!showDropdown) {
      // Mark all as read when opening
      const loggedIn = JSON.parse(localStorage.getItem("loggedInUser"));
      const allNotifications = JSON.parse(localStorage.getItem("notifications")) || [];
      
      const updated = allNotifications.map(n => {
        if (n.userId === loggedIn.email) {
          return { ...n, read: true };
        }
        return n;
      });

      localStorage.setItem("notifications", JSON.stringify(updated));
      setUnreadCount(0);
    }
  };

  return (
    <div className="position-relative me-3">
      <button 
        className="btn btn-link text-white position-relative p-0" 
        onClick={toggleDropdown}
        style={{ textDecoration: "none" }}
      >
        <i className="bi bi-bell fs-5"></i>
        {unreadCount > 0 && (
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: "0.6rem" }}>
            {unreadCount}
          </span>
        )}
      </button>

      {showDropdown && (
        <div className="card position-absolute end-0 mt-2 shadow" style={{ width: "300px", zIndex: 1000 }}>
          <div className="card-header bg-light d-flex justify-content-between align-items-center">
            <h6 className="mb-0 text-dark">Notifications</h6>
            <button className="btn-close btn-sm" onClick={() => setShowDropdown(false)}></button>
          </div>
          <div className="list-group list-group-flush" style={{ maxHeight: "300px", overflowY: "auto" }}>
            {notifications.length === 0 ? (
              <div className="list-group-item text-center text-muted small py-3">
                No notifications
              </div>
            ) : (
              notifications.map((n) => (
                <div key={n.id} className={`list-group-item ${!n.read ? "bg-light" : ""}`}>
                  <p className="mb-1 small text-dark">{n.message}</p>
                  <small className="text-muted" style={{ fontSize: "0.7rem" }}>
                    {new Date(n.date).toLocaleString()}
                  </small>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Notifications;
