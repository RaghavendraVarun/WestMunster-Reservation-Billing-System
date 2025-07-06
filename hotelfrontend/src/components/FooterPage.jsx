import 'bootstrap-icons/font/bootstrap-icons.css';

export const FooterPage = () => {
  return (
    <footer className="bg-dark text-white w-100" style={{ height: '21vh', display: 'flex', alignItems: 'center'}}>
      <div className="container w-100">
        <div className="row text-center text-md-start align-items-center">

          {/* Contact Info */}
          <div className="col-md-3 mb-2 mb-md-0">
            <h6 className="fw-bold mb-1" style={{ fontSize: '0.9rem' }}>FOR BOOKING CONTACT</h6>
            <p className="mb-0" style={{ fontSize: '0.85rem' }}>044-4210-4210</p>
            <p className="mb-0" style={{ fontSize: '0.85rem' }}>reservation@munster.com</p>
          </div>

          {/* Social Media */}
          <div className="col-md-3 mx-auto text-center text-md-center">
            <h6 className="fw-bold mb-1" style={{ fontSize: '0.9rem' }}>Connect with us</h6>
            <div className="d-flex justify-content-center gap-3">
              <a href="https://www.facebook.com" className="text-white" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-facebook fs-6"></i>
              </a>
              <a href="https://www.instagram.com" className="text-white" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-instagram fs-6"></i>
              </a>
              <a href="https://www.x.com" className="text-white" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-twitter fs-6"></i>
              </a>
              <a href="https://www.youtube.com" className="text-white" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-youtube fs-6"></i>
              </a>
            </div>
          </div>

        </div>

        <div className="text-center mt-1 border-top pt-1">
          <small style={{ fontSize: '0.75rem' }}>© 2025 The West Munster Hotel Company Limited. All Rights Reserved.</small>
        </div>
      </div>
    </footer>
  );
};