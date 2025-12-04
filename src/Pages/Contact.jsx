import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // simple client-side placeholder action
    console.log("Contact form submitted:", form);
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="contact-page container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h1 className="mb-3 display-6">Contact Us</h1>
          <p className="text-muted mb-4">
            Have questions or feedback? Fill out the form below and we’ll get back to you as soon as possible.
          </p>

          {sent && (
            <div className="alert alert-success" role="alert">
              Thanks — your message has been sent.
            </div>
          )}

          <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
            <div className="mb-3">
              <label className="form-label">Your Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                type="text"
                className="form-control"
                placeholder="John Doe"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                className="form-control"
                placeholder="name@example.com"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="5"
                className="form-control"
                placeholder="Write your message..."
                required
              />
            </div>

            <div className="d-flex justify-content-between align-items-center">
              <small className="text-muted">We'll reply within 1-2 business days.</small>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
