import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layouts
import LandingLayout from "./Layouts/LandingLayout";
import IntervieweeLayout from "./Layouts/IntervieweeLayout";
import InterviewerLayout from "./Layouts/InterviewerLayout";

// Landing Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Contact from "./Pages/Contact";
import Privacy from "./Pages/Privacy";

// Interviewee Pages
import IntervieweeDashboard from "./Pages/Interviewee/IntervieweeDashboard";
import FindInterviewer from "./Pages/Interviewee/FindInterviewer";
import IntervieweeSessions from "./Pages/Interviewee/IntervieweeSessions";
import IntervieweeProfile from "./Pages/Interviewee/IntervieweeProfile";

// Interviewer Pages
import InterviewerDashboard from "./Pages/Interviewer/InterviewerDashboard";
import InterviewRequests from "./Pages/Interviewer/InterviewRequests";
import InterviewerSessions from "./Pages/Interviewer/InterviewerSessions";
import InterviewerProfile from "./Pages/Interviewer/InterviewerProfile";

// Admin Pages
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import AdminLayout from "./Layouts/AdminLayout";

// Shared
import VideoCall from "./Pages/Shared/VideoCall";

// Protected Route
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>

        {/* Landing Pages */}
        <Route element={<LandingLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* Video Call Route (Protected for both) */}
        <Route path="/video-call/:sessionId" element={<VideoCall />} />

        {/* Admin Pages */}
        <Route element={<AdminLayout />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Route>

        {/* Interviewee Pages (Protected) */}
        <Route
          element={
            <ProtectedRoute role="interviewee">
              <IntervieweeLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/interviewee/dashboard" element={<IntervieweeDashboard />} />
          <Route path="/interviewee/find-interviewer" element={<FindInterviewer />} />
          <Route path="/interviewee/my-sessions" element={<IntervieweeSessions />} />
          <Route path="/interviewee/profile" element={<IntervieweeProfile />} />
        </Route>

        {/* Interviewer Pages (Protected) */}
        <Route
          element={
            <ProtectedRoute role="interviewer">
              <InterviewerLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/interviewer/dashboard" element={<InterviewerDashboard />} />
          <Route path="/interviewer/requests" element={<InterviewRequests />} />
          <Route path="/interviewer/my-sessions" element={<InterviewerSessions />} />
          <Route path="/interviewer/profile" element={<InterviewerProfile />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
