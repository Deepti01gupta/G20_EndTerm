import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, role }) {
  // Get logged-in user from localStorage
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  // If no user → redirect to login
  if (!loggedInUser) {
    return <Navigate to="/login" replace />;
  }

  // Support legacy role names: map older app roles to current ones
  const roleAliases = {
    interviewee: ["interviewee", "jobseeker"],
    interviewer: ["interviewer", "employer"],
  };

  // If role is restricted and user's role doesn't match accepted values → redirect
  if (role) {
    const allowed = roleAliases[role] || [role];
    if (!allowed.includes(loggedInUser.role)) {
      return <Navigate to="/login" replace />;
    }
  }

  // Otherwise → render the page
  return children;
}

export default ProtectedRoute;
