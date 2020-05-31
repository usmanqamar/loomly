import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import Home from '../Home/Loadable';
import Calendar from '../Calendar/Loadable';
import AddCalendar from '../AddCalendar/Loadable';
import NotFound from '../Notfound/Loadable';

import Login from '../Login/Loadable';
import Logout from '../Logout/Loadable';
import Forgot from '../Forgot/Loadable';

import GlobalStyle from '../../global-styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tabler-react/dist/Tabler.css';
import '../../styles/styles.scss';
import PrivateRoute from '../privateRouteHOC';

const AppWrapper = styled.div`
  //max-width: calc(1264px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  //padding: 0 16px;
  flex-direction: column;
  flex: 1 1 auto;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet titleTemplate="%s - Loomly">
        <meta name="description" content="" />
      </Helmet>
      {/* <Header /> */}
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/logout" exact component={Logout} />
        <Route path="/forgot" exact component={Forgot} />

        <PrivateRoute path="/home" exact component={Home} />
        <PrivateRoute path="/calendar/add" exact component={AddCalendar} />
        <PrivateRoute path="/calendar/edit/:id" exact component={AddCalendar} />
        <PrivateRoute path="/calendar/:id?" exact component={Calendar} />
        <PrivateRoute component={NotFound} />
      </Switch>
      <GlobalStyle />
    </AppWrapper>
  );
}
