import React from 'react';

const Footer = () => {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
            aria-label="Bootstrap"
          >
            <i className="bi bi-bootstrap-fill" style={{ fontSize: '1.5rem', color: 'black' }}></i>
          </a>
          <span className="mb-3 mb-md-0 text-body-secondary">
            © 2025 Company, Inc
          </span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a
              className="text-body-secondary"
              href="#"
              aria-label="Instagram"
            >
              <i className="bi bi-instagram" style={{ fontSize: '1.5rem', color: 'black' }}></i>
            </a>
          </li>
          <li className="ms-3">
            <a
              className="text-body-secondary"
              href="#"
              aria-label="Facebook"
            >
              <i className="bi bi-facebook" style={{ fontSize: '1.5rem', color: 'black' }}></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
