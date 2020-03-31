import React from 'react';

const navbar = () => {
  return (
      <nav className={'navbar navbar-expand-md navbar-dark'}>
        <div className={'container-fluid'}>
          <a className="navbar-brand" href="/">
            <img className="black-logo" alt="logo" />
          </a>
          <div id={'navbarMenu'} className={'collapse navbar-collapse'}>
            <ul className="navbar-nav">
              <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
              <li className="nav-item"><a className="nav-link" href="#team">Team</a></li>
              <li className="nav-item"><a className="nav-link" href="#our-work">Our Work</a></li>
              <li className="nav-item"><a className="nav-link" href="#testimonials">Testimonials</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact-us">Contact Us</a></li>
              <li className="nav-item"><a className="nav-link" href="#careers">Careers</a></li>
            </ul>
          </div>
        </div>
      </nav>
  );
};

export default navbar;