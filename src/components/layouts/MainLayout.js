import React, { PropTypes } from 'react';

import { Segment, Header, Container, Menu } from 'semantic-ui-react';

import Link from 'components/elements/Link';

import { contactsPath } from 'helpers/routes';

const MainLayout = ({ children }) => (
  <Container>
    <Logo />
    {children}
    <Footer />
  </Container>
);

MainLayout.propTypes = {
  children: PropTypes.node
};

export default MainLayout;

const Logo = () => (
  <Segment clearing>
    <Header floated='left'>
      <Link to='/'>Thinknetica Blog</Link>
    </Header>
    <Menu floated='right' compact={true}>
      <Link to={contactsPath()}>
        <Menu.Item>Contacts</Menu.Item>
      </Link>
    </Menu>
  </Segment>
);

const Footer = () => (
  <Segment>
    Powered by React Course.
  </Segment>
);
