import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from '../../pages/home'
import NotFound from '../../pages/errors'
import Login from '../../pages/login'
import LoggedIn from '../../pages/logged_in'

const Root: React.FC = () => (
  <div>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/board">
        <LoggedIn name="abcd" />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
      <Redirect to="/login" />
    </Switch>
  </div>
)

export default Root
