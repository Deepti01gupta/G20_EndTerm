import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, role }) {
  // Get logged-in user from localStorage
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  // If no user → redirect to login
  if (!loggedInUser) {
    return <Navigate to="/login" replace />;
  }

  // If role is restricted and user’s role doesn’t match → redirect
  if (role && loggedInUser.role !== role) {
    return <Navigate to="/login" replace />;
  }

  // Otherwise → render the page
  return children;
}

export default ProtectedRoute;
