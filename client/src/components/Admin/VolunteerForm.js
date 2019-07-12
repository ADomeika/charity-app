import React, { useState, useContext } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

import { AlertContext } from '../../contexts/AlertContext'

const VolunteerForm = withRouter(({ history }) => {
  const { setAlert } = useContext(AlertContext)
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    imgSrc: ''
  })

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('/api/volunteers', formData)
      history.push('/admin/volunteers')
      setAlert('Successfully created a volunteer', 'success')
    } catch (error) {
      console.log(error.response.data)
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="name">Volunteer name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Volunteer's name..."
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Volunteer description</label>
        <textarea
          className="form-control"
          id="description"
          rows="5"
          placeholder="Volunteer's description..."
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="imgSrc">Volunteer's Image URL</label>
        <input
          type="text"
          className="form-control"
          id="imgSrc"
          placeholder="Volunteer's image URL..."
          value={formData.imgSrc}
          onChange={(e) => setFormData({ ...formData, imgSrc: e.target.value })}
        />
      </div>
      <button type="submit" className="btn btn-primary" style={{ cursor: 'pointer' }}>Submit</button>
    </form>
  )
})

export default VolunteerForm
