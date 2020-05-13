import React from 'react';
//import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';

import {Card, Button, Header as Head, Nav, Site} from "tabler-react";

const Header = () => (

  <>
    <Site
      href='asdasdas.co'
      children={(<h1>aaaaaa</h1>)}
      navItems={(<Nav>
        <Nav.Item hasSubNav value="Page One" icon="globe">

        </Nav.Item>
        <Nav.Item to="http://www.example.com">Page Two</Nav.Item>
        <Nav.Item value="Page Three" />
        <Nav.Item active icon="user">
          Page Four
        </Nav.Item>
      </Nav>)}
      imageUrl='http://cdn.loomly.com/assets/marketing_pages/loomly-brand-success-platform-for-marketing-teams-logo-cd9a066997e18e1a6a9fe8999c91c2f2e47eda538efbfe3e4c0174f03c3d4d27.png'>

    </Site>


    </>

);

export default Header;
