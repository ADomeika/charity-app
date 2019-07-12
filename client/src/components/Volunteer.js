import React from 'react'

const Volunteer = ({ volunteer: { name, description, imgSrc } }) => (
  <div className="col-12 col-sm-6 col-md-4 col-lg-3">
    <div className="single-vol shadow">
      <div className="content">
        <a href="!#" target="_blank">
          <div className="content-overlay"></div>
            <img className="content-image img-fluid d-block mx-auto img-thumbnail" src={imgSrc} alt={`${name}'s profile`} />
            <div className="content-details fadeIn-bottom">
              <h4>{name}</h4>
              <p>{description}</p>
            </div>
          </a>
       </div>
    </div>
  </div>
)

export default Volunteer
