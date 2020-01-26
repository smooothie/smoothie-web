import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';

import { Layout } from 'components/layout';
import { SignIn } from 'components/authentication';
import { AccountListPage, AccountPage } from 'components/accounts';
import urls from 'helpers/urls';
import theme from 'helpers/theme';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Layout>
          <Switch>
            <Route path={urls.login}>
              <SignIn />
            </Route>
            <Route path={urls.account}>
              <AccountPage />
            </Route>
            <Route path={urls.home}>
              <AccountListPage />
            </Route>
          </Switch>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
