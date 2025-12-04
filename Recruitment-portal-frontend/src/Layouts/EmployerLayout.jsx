import { Outlet } from "react-router-dom";
import EmployerNavbar from "../Components/EmployerNavbar";
import Footer from "../Components/Footer";

function EmployerLayout() {
  return (
    <div className="app-container">
      <EmployerNavbar />
      <main className="container" style={{ marginTop: "80px" }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default EmployerLayout;
