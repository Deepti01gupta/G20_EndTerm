import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="hero bg-primary text-white text-center py-5">
        <h1 className="display-4">InterviewPrep</h1>
        <p className="lead">Practice interviews with industry experts and ace your next opportunity.</p>
        <Link className="btn btn-light btn-lg me-2" to="/register">Get Started</Link>
        <Link className="btn btn-outline-light btn-lg" to="/about">Learn More</Link>
      </div>

      <div className="container my-5">
        <h2 className="text-center mb-4">How It Works</h2>
        <div className="row">
          <div className="col-md-4 text-center mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <h5>1. Create Profile</h5>
                <p>Sign up as an interviewee or interviewer. Add your skills and availability.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-center mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <h5>2. Match & Schedule</h5>
                <p>Find the right interviewer based on skills. Book a session that works for both.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-center mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <h5>3. Practice & Improve</h5>
                <p>Attend mock interviews, get feedback, and track your progress over time.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-light py-5">
        <div className="container text-center">
          <h3>Ready to ace your interviews?</h3>
          <p className="text-muted">Join hundreds of candidates improving their interview skills daily.</p>
          <Link className="btn btn-primary btn-lg" to="/register">Join Now - It's Free</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
