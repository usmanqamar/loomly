import React from 'react';
import { Route } from 'react-router-dom';
import Login from './containers/Login/Loadable';
import Home from './containers/Home/Loadable';
import Logout from './containers/Logout/Loadable';
import Forgot from './containers/Forgot/Loadable';
import AddCalendar from './containers/AddCalendar/Loadable';
import Calendar from './containers/Calendar/Loadable';
import NotFound from './containers/Notfound/Loadable';
import PrivateRoute from './containers/privateRouteHOC';

export function Routes() {
  return (
    <>
      <Route path="/" exact component={Login} />
      <Route path="/logout" exact component={Logout} />
      <Route path="/forgot" exact component={Forgot} />

      <PrivateRoute path="/home" exact component={Home} />
      <PrivateRoute path="/calendar/add" exact component={AddCalendar} />
      <PrivateRoute path="/calendar/edit/:id" exact component={AddCalendar} />
      <PrivateRoute path="/calendar/:id?" exact component={Calendar} />
      <PrivateRoute component={NotFound} />
    </>
  );
}
