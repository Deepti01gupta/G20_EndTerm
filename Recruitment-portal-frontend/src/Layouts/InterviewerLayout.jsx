import { Outlet } from "react-router-dom";
import InterviewerNavbar from "../Components/InterviewerNavbar";
import Footer from "../Components/Footer";

function InterviewerLayout() {
  return (
    <div className="app-container">
      <InterviewerNavbar />
      <main className="container" style={{ marginTop: "80px", minHeight: "80vh" }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default InterviewerLayout;
