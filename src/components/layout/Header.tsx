import React, { useCallback } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { makeStyles } from '@material-ui/core/styles';
import Cookies from 'js-cookie';
import { useHistory, Link as RouterLink } from 'react-router-dom';

import { AUTH_TOKEN_COOKIE } from 'helpers/constants';
import urls, { getStatsTabUrl } from 'helpers/urls';

const useStyles = makeStyles(theme => ({
  menuItem: {
    marginRight: theme.spacing(2),
  },
  menuItemRight: {
    marginLeft: 'auto',
  },
}));

const Header: React.FC = () => {
  const classes = useStyles();

  const history = useHistory();

  const logout = useCallback(() => {
    Cookies.remove(AUTH_TOKEN_COOKIE);
    history.replace(urls.login);
  }, [history]);

  const isLoggedIn = Cookies.get(AUTH_TOKEN_COOKIE);

  if (!isLoggedIn) return null;

  return (
    <AppBar position="static">
      <Toolbar>
        <Link
          color="inherit"
          variant="h6"
          underline="none"
          className={classes.menuItem}
          component={RouterLink}
          to={urls.home}
        >
          Головна
        </Link>
        <Link
          color="inherit"
          variant="h6"
          underline="none"
          className={classes.menuItem}
          component={RouterLink}
          to={getStatsTabUrl('')}
        >
          Статистика
        </Link>
        <IconButton
          color="inherit"
          aria-label="logout"
          className={classes.menuItemRight}
          onClick={logout}
        >
          <ExitToAppIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
