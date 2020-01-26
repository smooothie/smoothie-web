import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Layout } from 'components/layout';
import { SignIn } from 'components/authentication';
import { AccountListPage, AccountPage } from 'components/accounts';
import urls from 'helpers/urls';

const App: React.FC = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default App;
