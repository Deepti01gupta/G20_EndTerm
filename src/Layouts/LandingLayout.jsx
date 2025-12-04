import { Outlet } from "react-router-dom";
import LandingNavbar from "../Components/LandingNavbar";
import Footer from "../Components/Footer";

function LandingLayout() {
  return (
    <div className="app-container min-vh-100 d-flex flex-column">
      <LandingNavbar />
      <main className="container flex-grow-1" style={{ marginTop: "80px" }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default LandingLayout;
