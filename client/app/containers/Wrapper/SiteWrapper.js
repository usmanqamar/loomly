import * as React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import {
  Site,
  Grid,
  List,
  RouterContextProvider,
} from 'tabler-react';

import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { CopyRight } from '../../components/Footer';
import { makeSelectData } from '../Login/selectors';
let navBarItems = null;

function SiteWrapper({ children }) {
  const state = {
    notificationsObjects: [],
  };
  const user = useSelector(makeSelectData());
  let accountDropdownProps;
  if (user) {
    navBarItems = [
      {
        value: 'Home',
        to: '/home',
        icon: 'home',
        LinkComponent: withRouter(NavLink),
        useExact: true,
      },
      {
        value: 'Calendar',
        icon: 'calendar',
        to: '/calendar',
        LinkComponent: withRouter(NavLink),
      },
      {
        value: 'Logout',
        icon: 'calendar',
        to: '/logout',
        LinkComponent: withRouter(NavLink),
      },
    ];
    accountDropdownProps = {
      name: `${user.firstName} ${user.lastName}`,
      description: user.role,
      options: [
        {
          icon: 'log-out',
          value: 'Sign out',
          to: '/logout',
          RootComponent: withRouter(NavLink),
        },
      ],
    };
  }

  const notificationsObjects = state.notificationsObjects || [];
  const unreadCount = state.notificationsObjects.reduce(
    (a, v) => a || v.unread,
    false,
  );
  return (
    <Site.Wrapper
      headerProps={{
        to: '/',
        imageURL:
          'http://cdn.loomly.com/assets/marketing_pages/loomly-brand-success-platform-for-marketing-teams-logo-cd9a066997e18e1a6a9fe8999c91c2f2e47eda538efbfe3e4c0174f03c3d4d27.png',
        navItems: null,
        accountDropdown: accountDropdownProps,
      }}
      navProps={{ itemsObjects: navBarItems }}
      routerContextComponentType={withRouter(RouterContextProvider)}
      footerProps={{
        links: [
          <a href="">First Link</a>,
          <a href="#">Second Link</a>,
          <a href="#">Third Link</a>,
          <a href="#">Fourth Link</a>,
          <a href="#">Five Link</a>,
          <a href="#">Sixth Link</a>,
          <a href="#">Seventh Link</a>,
          <a href="#">Eigth Link</a>,
          <a href="">nin Link</a>,
        ],
        note: '',
        copyright: <CopyRight />,
        nav: (
          <React.Fragment>
            <Grid.Col auto>
              <List className="list-inline list-inline-dots mb-0">
                <List.Item className="list-inline-item">
                  <a href="./docs/index.html">Documentation</a>
                </List.Item>
                <List.Item className="list-inline-item">
                  <a href="./faq.html">FAQ</a>
                </List.Item>
              </List>
            </Grid.Col>
            <Grid.Col auto />
          </React.Fragment>
        ),
      }}
    >
      {children}
    </Site.Wrapper>
  );
}
SiteWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SiteWrapper;
