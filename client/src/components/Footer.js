import React from 'react'

const Footer = () => (
  <footer className="footer-area section-gap">
    <div className="container">
      <div className="row d-flex flex-column justify-content-center">
        <ul className="footer-menu">
          <li><a href="#home" className="m-4">Home</a></li>
          <li><a href="#project" className="m-4">Projects</a></li>
          <li><a href="#about" className="m-4">About</a></li>
          <li><a href="#donate" className="m-4">Donate</a></li>
        </ul>
        <div className="footer-social">
          <a href="!#"><i className="fa fa-facebook"></i></a>
          <a href="!#"><i className="fa fa-twitter"></i></a>
          <a href="!#"><i className="fa fa-dribbble"></i></a>
          <a href="!#"><i className="fa fa-behance"></i></a>
        </div>
        <p className="footer-text m-0">
          Copyright &copy;
          {new Date().getFullYear()} {' '}
          All rights reserved | This template is made with <i className="fa fa-heart-o"></i> by {' '}
          <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a>
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
