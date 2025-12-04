import { Outlet } from "react-router-dom";
import IntervieweeNavbar from "../Components/IntervieweeNavbar";
import Footer from "../Components/Footer";

function IntervieweeLayout() {
  return (
    <div className="app-container">
      <IntervieweeNavbar />
      <main className="container" style={{ marginTop: "80px", minHeight: "80vh" }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default IntervieweeLayout;
