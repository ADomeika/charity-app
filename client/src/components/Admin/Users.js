import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import { AuthContext } from '../../contexts/AuthContext'

const Users = () => {
  const { user } = useContext(AuthContext)

  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/api/users')
        setUsers(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchUsers()
  }, [])
  return (
    <div className="row">
      {user && (user.role === 'developer' || user.role === 'superadmin') && (
        <div className="col-12 d-flex justify-content-end pr-5 my-2">
          <Link
            type="button"
            className="btn btn-primary"
            to="/admin/users/new"
          >Add a new User</Link>
        </div>
      )}
      <div className="col-12">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title mb-0">Users</h4>
            <div className="mt-4"></div>
            {users.map((user) => (
              <div className="d-flex py-2 border-bottom" key={user._id}>
                <div className="wrapper ml-2">
                  <p className="mb-n1 font-weight-semibold">{user.name}</p>
                  <small>{user.role}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Users
