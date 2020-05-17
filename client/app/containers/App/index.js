/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import Header from 'components/Header';
import Home from '../Home/Loadable';
import Calendar from '../Calendar/Loadable';
import AddCalendar from '../AddCalendar/Loadable';

import Login from '../Login/Loadable';
import Logout from '../Logout/Loadable';

import GlobalStyle from '../../global-styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tabler-react/dist/Tabler.css';
import '../../styles/styles.scss';

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
        <Route path="/home" exact component={Home} />
        <Route path="/logout" exact component={Logout} />
        <Route path="/calendar/add" exact component={AddCalendar} />
        <Route path="/calendar/:id?" exact component={Calendar} />
      </Switch>
      <GlobalStyle />
    </AppWrapper>
  );
}
