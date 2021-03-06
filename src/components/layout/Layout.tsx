import React from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './Header';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Container component="main" maxWidth="xs">
        {children}
      </Container>
    </>
  );
};

export default Layout;
