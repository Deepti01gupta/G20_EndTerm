import { Outlet } from "react-router-dom";
import JobseekerNavbar from "../Components/JobseekerNavbar";
import Footer from "../Components/Footer";

function JobseekerLayout() {
  return (
    <div className="app-container">
      <JobseekerNavbar />
      <main className="container" style={{ marginTop: "80px" }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default JobseekerLayout;
