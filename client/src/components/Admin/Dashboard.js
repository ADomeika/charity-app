import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Volunteers from './Volunteers'
import Users from './Users'
import Projects from './Projects'
import Project from './Project'
import ProjectForm from './ProjectForm'
import VolunteerForm from './VolunteerForm'
import UserForm from './UserForm';

const Dashboard = () => {
  return (
    <>
      <div className="col-12">
        <Switch>
          <Route exact path="/admin/volunteers" component={Volunteers} />
          <Route path="/admin/volunteers/new" component={VolunteerForm} />
          <Route exact path="/admin/projects" component={Projects} />
          <Route path="/admin/projects/new" component={ProjectForm} />
          <Route path="/admin/projects/:id" component={Project} />
          <Route exact path="/admin/users" component={Users} />
          <Route path="/admin/users/new" component={UserForm} />
        </Switch>
      </div>
    </>
  )
}

export default Dashboard
