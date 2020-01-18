import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import SignIn from 'components/SignIn';
import AccountListPage from 'components/accounts/AccountListPage';

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <SignIn />
      <AccountListPage />
    </>
  );
};

export default App;
