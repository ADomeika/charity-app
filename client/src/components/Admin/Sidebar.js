import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { AuthContext } from '../../contexts/AuthContext'

const Sidebar = () => {
  const { user } = useContext(AuthContext)
  return (
    <nav className="sidebar sidebar-offcanvas h-100" id="sidebar">
      <ul className="nav">
        <li className="nav-item nav-profile">
          <a href="!#" className="nav-link">
            <div className="text-wrapper">
              <p className="profile-name">{user && user.name}</p>
              <p className="designation">{user && user.role}</p>
            </div>
          </a>
        </li>
        <li className="nav-item nav-category">Main Menu</li>
        <li className="nav-item">
          <Link className="nav-link" to="/admin/projects">
            <i className="menu-icon typcn typcn-document-text"></i>
            <span className="menu-title">Projects</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/admin/volunteers">
            <i className="menu-icon typcn typcn-shopping-bag"></i>
            <span className="menu-title">Volunteers</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/admin/users">
            <i className="menu-icon typcn typcn-th-large-outline"></i>
            <span className="menu-title">Users</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar
