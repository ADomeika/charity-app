import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Volunteer from './Volunteer'

const Volunteers = () => {
  const [volunteers, setVolunteers] = useState([])
  useEffect(() => {
    const fetchVolunteers = async () => {
      try {
        const response = await axios.get('/api/volunteers')
        setVolunteers(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchVolunteers()
  }, [])
  return (
    <div className="row">
      <div className="col-12 d-flex justify-content-end pr-5 my-2">
        <Link type="button" className="btn btn-primary" to="/admin/volunteers/new">Add a new Volunteer</Link>
      </div>
      <div className="col-12 d-flex flex-wrap">
        {volunteers.map((volunteer) => (
          <Volunteer volunteer={volunteer} key={volunteer._id} />
        ))}
      </div>
    </div>
  )
}

export default Volunteers
