import React from 'react'

const Volunteer = ({ volunteer: { name, description, imgSrc } }) => (
  <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-4 d-flex align-items-stretch">
    <div className="card">
      <img src={imgSrc} className="card-img-top" alt={`${name}'s profile`} style={{ maxHeight: '300px' }} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  </div>
)

export default Volunteer
