import { Outlet } from "react-router-dom";
import AdminNavbar from "../Components/AdminNavbar";
import Footer from "../Components/Footer";

function AdminLayout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <AdminNavbar />
      <main className="flex-grow-1 container mt-5 pt-5">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AdminLayout;
