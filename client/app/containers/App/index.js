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

import Home from 'containers/Home/Loadable';

import Header from 'components/Header';
import GlobalStyle from '../../global-styles';
import 'bootstrap/dist/css/bootstrap.min.css';

const AppWrapper = styled.div`
  max-width: calc(1200px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

const Content = styled.div`
  margin-top: 36px;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet titleTemplate="%s - Assignment">
        <meta name="description" content="Assignment" />
      </Helmet>
      <Header />
      <Content>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Content>
      <GlobalStyle />
    </AppWrapper>
  );
}
