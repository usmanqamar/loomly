import * as React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import { Site, Grid, List, RouterContextProvider } from 'tabler-react';

import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { CopyRight } from '../../components/Footer';
import { makeSelectUser } from '../App/selectors';
import logo from '../../images/logo.png';
let navBarItems = null;

function SiteWrapper({ children }) {
  const [navbar, setNavbar] = React.useState(null);
  const [accountDropdown, setAccountDropdown] = React.useState(null);
  const user = useSelector(makeSelectUser());
  let accountDropdownProps;

  React.useEffect(() => {
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

      setAccountDropdown(accountDropdownProps);
      setNavbar(navBarItems);
    }
  }, [user]);

  return (
    <Site.Wrapper
      headerProps={{
        href: '/',
        imageURL: logo,
        navItems: null,
        accountDropdown,
      }}
      navProps={{ itemsObjects: navbar }}
      routerContextComponentType={withRouter(RouterContextProvider)}
      footerProps={{
        links: [<a href="/">First Link</a>],
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
