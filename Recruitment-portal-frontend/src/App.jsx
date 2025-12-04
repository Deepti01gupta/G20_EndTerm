import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layouts
import LandingLayout from "./Layouts/LandingLayout";
import JobseekerLayout from "./Layouts/JobseekerLayout";
import EmployerLayout from "./Layouts/EmployerLayout";

// Landing Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Contact from "./Pages/Contact";
import Privacy from "./Pages/Privacy";

// Jobseeker Pages
import JobseekerDashboard from "./Pages/Jobseeker/JobseekerDashboard";
import Jobs from "./Pages/Jobseeker/Jobs";
import MyApplications from "./Pages/Jobseeker/MyApplications";
import JobseekerProfile from "./Pages/Jobseeker/JobseekerProfile";
import JobseekerSettings from "./Pages/Jobseeker/JobseekerSettings";

// Employer Pages
import EmployerDashboard from "./Pages/Employer/EmployerDashboard";
import PostJob from "./Pages/Employer/PostJob";
import ViewJobs from "./Pages/Employer/ViewJobs";
import ManageApplications from "./Pages/Employer/ManageApllications";
import EmployerProfile from "./Pages/Employer/EmployerProfile";
import EmployerSettings from "./Pages/Employer/EmployerSettings";

// Protected Route
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>

        {/* Auth Routes - No Navbar */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Landing Pages */}
        <Route element={<LandingLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
        </Route>

        {/* Jobseeker Pages (Protected) */}
        <Route
          element={
            <ProtectedRoute role="jobseeker">
              <JobseekerLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/jobseeker/dashboard" element={<JobseekerDashboard />} />
          <Route path="/jobseeker/jobs" element={<Jobs />} />
          <Route path="/jobseeker/my-applications" element={<MyApplications />} />
          <Route path="/jobseeker/profile" element={<JobseekerProfile />} />
          <Route path="/jobseeker/settings" element={<JobseekerSettings />} />
        </Route>

        {/* Employer Pages (Protected) */}
        <Route
          element={
            <ProtectedRoute role="employer">
              <EmployerLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/employer/dashboard" element={<EmployerDashboard />} />
          <Route path="/employer/post-job" element={<PostJob />} />
          <Route path="/employer/view-jobs" element={<ViewJobs />} />
          <Route path="/employer/manage-applications" element={<ManageApplications />} />
          <Route path="/employer/profile" element={<EmployerProfile />} />
          <Route path="/employer/settings" element={<EmployerSettings />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
