import React, { useState, useContext, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

import { AuthContext } from '../../contexts/AuthContext'
import { AlertContext } from '../../contexts/AlertContext'

const UserForm = withRouter(({ history }) => {
  const { isAuthenticated, user } = useContext(AuthContext)
  const { setAlert } = useContext(AlertContext)

  useEffect(() => {
    if (!isAuthenticated || (user.role !== 'developer' && user.role !== 'superadmin')) {
      history.push('/admin/users')
    }
  }, [history, isAuthenticated, user.role, setAlert])
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: ''
  })

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('/api/users', formData)
      history.push('/admin/users')
      setAlert('Successfully created a user', 'success')
    } catch (error) {
      alert(error.response.data.error)
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="name">User name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="User's name..."
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">User email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="User's email..."
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">User password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="********"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label htmlFor="role">User role</label>
        <select
          id="role"
          className="form-control"
          value={formData.role}
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
        >
          <option value="" disabled>Choose a user role</option>
          <option value="editor">Editor</option>
          <option value="superadmin">Superadmin</option>
        </select>
      </div>
      <button
        type="submit"
        className="btn btn-primary mt-3"
        style={{ cursor: 'pointer' }}
      >Submit</button>
    </form>
  )
})

export default UserForm
