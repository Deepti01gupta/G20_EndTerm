function Privacy() {
  return (
    <div className="privacy-page container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-9">
          <h1 className="mb-3 display-6">Privacy Policy</h1>
          <p className="text-muted mb-4">
            This Privacy Policy explains how HireUp collects, uses, shares, and protects your personal information.
          </p>

          <div className="card p-4 shadow-sm">
            <section className="mb-4">
              <h2 className="h5">1. Information We Collect</h2>
              <p className="text-muted mb-0">
                We may collect information you provide directly (name, email, resume, profile data) and automatically from
                your use of our services (usage data, cookies).
              </p>
            </section>

            <section className="mb-4">
              <h2 className="h5">2. How We Use Information</h2>
              <p className="text-muted mb-0">
                We use information to provide, maintain, and improve services, to communicate with users, and to match candidates
                with job opportunities.
              </p>
            </section>

            <section className="mb-4">
              <h2 className="h5">3. Data Security</h2>
              <p className="text-muted mb-0">
                We implement reasonable administrative, technical, and physical safeguards to protect your data.
              </p>
            </section>

            <section>
              <h2 className="h5">Contact</h2>
              <p className="text-muted mb-0">
                If you have questions about this policy, email <span className="fw-semibold">support@hireup.com</span>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Privacy;
