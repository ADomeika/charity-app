import React, { useState, useContext } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

import { AlertContext } from '../../contexts/AlertContext'

const ProjectForm = withRouter(({ history }) => {
  const { setAlert } = useContext(AlertContext)
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    imgSrc: ''
  })

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('/api/projects', formData)
      history.push('/admin/projects')
      setAlert('Successfully created a project', 'success')
    } catch (error) {
      console.log(error.response.data)
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="name">Project name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Project name..."
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Project description</label>
        <textarea
          className="form-control"
          id="description"
          rows="5"
          placeholder="Project description..."
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="imgSrc">Image URL</label>
        <input
          type="text"
          className="form-control"
          id="imgSrc"
          placeholder="Project image URL..."
          value={formData.imgSrc}
          onChange={(e) => setFormData({ ...formData, imgSrc: e.target.value })}
        />
      </div>
      <button type="submit" className="btn btn-primary" style={{ cursor: 'pointer' }}>Submit</button>
    </form>
  )
})

export default ProjectForm
