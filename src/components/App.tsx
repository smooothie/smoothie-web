import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Cookies from 'js-cookie';

import { SignIn } from 'components/authentication';
import { AccountListPage } from 'components/accounts';

const App: React.FC = () => {
  const token = Cookies.get('JWT');
  return (
    <>
      <CssBaseline />
      {!token ? <SignIn /> : <AccountListPage />}
    </>
  );
};

export default App;
