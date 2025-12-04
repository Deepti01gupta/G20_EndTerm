import { Link } from "react-router-dom";
import LandingNavbar from "../Components/LandingNavbar";

function Home() {
  return (
    <div>
      <div className="hero bg-light text-dark text-center py-5">
        <h1 className="display-4">Welcome to HireUp</h1>
        <p className="lead">Find the best jobs or hire top talent effortlessly.</p>
        <Link className="btn btn-primary btn-lg me-2" to="/register">Get Started</Link>
        <Link className="btn btn-outline-primary btn-lg" to="/about">Learn More</Link>
      </div>

      <div className="container my-5">
        <h2 className="text-center mb-4">Why HireUp?</h2>
        <div className="row">
          <div className="col-md-4 text-center">
            <h5>Easy Job Search</h5>
            <p>Browse thousands of job listings tailored for you.</p>
          </div>
          <div className="col-md-4 text-center">
            <h5>Post Jobs Quickly</h5>
            <p>Employers can post jobs and manage applications easily.</p>
          </div>
          <div className="col-md-4 text-center">
            <h5>Secure Profiles</h5>
            <p>Manage your profile securely and professionally.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
