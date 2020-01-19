import React, { useCallback } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import Cookies from 'js-cookie';
import { useHistory, Link as RouterLink } from 'react-router-dom';

import { AUTH_TOKEN_COOKIE } from 'helpers/constants';
import urls from 'helpers/urls';

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
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

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Link
          color="inherit"
          variant="h6"
          underline="none"
          className={classes.title}
          component={RouterLink}
          to={urls.home}
        >
          Smooothie
        </Link>
        {isLoggedIn ? (
          <Button color="inherit" onClick={logout}>
            Logout
          </Button>
        ) : (
          <Button color="inherit" component={RouterLink} to={urls.login}>
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
