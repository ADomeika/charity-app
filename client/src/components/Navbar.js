import React from 'react'

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container py-2">
      <div className="logo">
        <a href="#home"><img src="img/logo.png" alt="" /></a>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <a className="nav-item nav-link active text-right" href="#home">Home <span className="sr-only">(current)</span></a>
          <a className="nav-item nav-link text-right" href="#project">Projects</a>
          <a className="nav-item nav-link text-right" href="#about">About</a>
          <a className="nav-item nav-link text-right" href="#volunteers">Volunteers</a>
          <a className="nav-item nav-link text-right" href="#donate">Donate</a>
        </div>
      </div>
    </div>
  </nav>
)

export default Navbar
