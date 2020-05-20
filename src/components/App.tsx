import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

import { Layout } from 'components/layout';
import { SignIn, ProtectedRoute } from 'components/authentication';
import { AccountList, AccountPage } from 'components/accounts';
import Stats from 'components/stats';
import urls from 'helpers/urls';
import theme from 'helpers/theme';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <Layout>
            <Switch>
              <Route path={urls.login} component={SignIn} />
              <ProtectedRoute path={urls.stats} component={Stats} />
              <ProtectedRoute path={urls.account} component={AccountPage} />
              <ProtectedRoute path={urls.home} component={AccountList} />
            </Switch>
          </Layout>
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
