export default function Footer() {
  return (
    <footer className="bg-dark text-white py-5 mt-auto">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h5 className="fw-bold mb-3" style={{color: '#ea4c89'}}>
              <i className="bi bi-circle-fill me-2"></i>
              Dribbble
            </h5>
            <p className="text-light opacity-75 mb-3">
              The world's leading community for creatives to share, grow, and get hired.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-light fs-5">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="text-light fs-5">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-light fs-5">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-light fs-5">
                <i className="bi bi-pinterest"></i>
              </a>
            </div>
          </div>
          
          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h6 className="fw-semibold mb-3">For designers</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-light opacity-75 text-decoration-none">Go Pro!</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light opacity-75 text-decoration-none">Explore design work</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light opacity-75 text-decoration-none">Design blog</a>
              </li>
            </ul>
          </div>
          
          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h6 className="fw-semibold mb-3">Hire designers</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-light opacity-75 text-decoration-none">Post a job opening</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light opacity-75 text-decoration-none">Search for designers</a>
              </li>
            </ul>
          </div>
          
          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h6 className="fw-semibold mb-3">Company</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-light opacity-75 text-decoration-none">About</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light opacity-75 text-decoration-none">Careers</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light opacity-75 text-decoration-none">Support</a>
              </li>
            </ul>
          </div>
          
          <div className="col-lg-2 col-md-6">
            <h6 className="fw-semibold mb-3">Directories</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-light opacity-75 text-decoration-none">Design jobs</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light opacity-75 text-decoration-none">Designers for hire</a>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="my-4 opacity-25" />
        
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="mb-0 text-light opacity-75 small">
              © 2025 Dribbble. All rights reserved.
            </p>
          </div>
          <div className="col-md-6">
            <ul className="list-inline mb-0 text-end">
              <li className="list-inline-item">
                <a href="#" className="text-light opacity-75 text-decoration-none small">Terms</a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="text-light opacity-75 text-decoration-none small">Privacy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}