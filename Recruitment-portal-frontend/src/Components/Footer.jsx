import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-light text-center text-muted py-3 mt-4">
      <div className="container">
        <p className="mb-0">&copy; {new Date().getFullYear()} HireUp. All rights reserved.</p>
        <ul className="list-inline mt-2 mb-0">
          <li className="list-inline-item"><Link to="/about" className="text-muted">About</Link></li>
          <li className="list-inline-item"><Link to="/contact" className="text-muted">Contact</Link></li>
          <li className="list-inline-item"><Link to="/privacy" className="text-muted">Privacy</Link></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
