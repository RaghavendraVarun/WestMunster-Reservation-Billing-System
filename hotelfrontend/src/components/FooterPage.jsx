import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';


export const FooterPage = () => {
  return (
    <div className="bg-dark text-white pt-5 pb-3 w-100">
  <div className="container">
    <div className="row text-center text-md-start">

      {/* Contact Info */}
      <div className="col-md-3 mb-4">
        <h6 className="fw-bold">FOR BOOKING CONTACT</h6>
        <p className="mb-1">044-4210-4210</p>
        <p className="mb-1">reservation@munster.com</p>
        <h6 className="fw-bold mt-3">Customer Booking</h6>
        <p className="mb-1">Contact@munster.com</p>
        <p className="mb-1">website.facebook@munster.com</p>
      </div>

      {/* Quick Links */}
      <div className="col-md-3 mb-4">
        <h6 className="fw-bold">Quick Links</h6>
        <ul className="list-unstyled">
          <li><Link to='/login' className="text-white text-decoration-none link-light link-opacity-75-hover">Dining</Link></li>
          <li><Link to='/login' className="text-white text-decoration-none link-light link-opacity-75-hover">Wellness</Link></li>
          <li><Link to='/login' className="text-white text-decoration-none link-light link-opacity-75-hover">Timeless wedding</Link></li>
          <li><Link to='/login' className="text-white text-decoration-none link-light link-opacity-75-hover">Event Venues</Link></li>
          <li><Link to='/login' className="text-white text-decoration-none link-light link-opacity-75-hover">Top of the Building</Link></li>
        </ul>
      </div>

      {/* About */}
      <div className="col-md-3 mb-4">
        <h6 className="fw-bold">About munster</h6>
        <ul className="list-unstyled">
          <li><Link to='/login' className="text-white text-decoration-none link-light link-opacity-75-hover">Holidays</Link></li>
          <li><Link to='/login' className="text-white text-decoration-none link-light link-opacity-75-hover">Offers</Link></li>
          <li><Link to='/login' className="text-white text-decoration-none link-light link-opacity-75-hover">Gifting</Link></li>
        </ul>
      </div>

      {/* Social Media */}
      <div className="col-md-3 mb-4 text-md-center">
        <h6 className="fw-bold">Connect with us</h6>
        <div className="d-flex justify-content-md-center gap-3 mt-2">
          <a href="https://www.facebook.com"><i className="bi bi-facebook fs-4"></i></a>
          <a href="https://www.instagram.com"><i className="bi bi-instagram fs-4"></i></a>
          <a href="https://www.x.com"><i className="bi bi-twitter fs-4"></i></a>
          <a href="https://www.youtube.com"><i className="bi bi-youtube fs-4"></i></a>
        </div>
      </div>

    </div>

    <div className="text-center mt-4 border-top pt-3">
      <small>© 2025 The West Munster Hotel Company Limited. All Rights Reserved.</small>
    </div>
  </div>
</div>

  )
}
