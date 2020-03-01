import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

import Link from 'components/atoms/Link';
import urls from 'helpers/urls';
import { Account } from '../types';
import { iconsMap } from '../helpers';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(1),
  },
}));

type Props = {
  account: Account;
};

const AccountListItem: React.FC<Props> = ({
  account: { id, name, itemType, balance, balanceCurrency },
}) => {
  const classes = useStyles();
  const Icon = iconsMap[itemType] || iconsMap.default;
  return (
    <Paper elevation={3}>
      <Link to={urls.account.replace(':accountId', id.toString())}>
        <Box padding={1}>
          <Box display="flex" alignItems="center">
            <Icon className={classes.icon} />
            <Typography variant="h6" component="h3">
              {name}
            </Typography>
          </Box>
          <Typography>
            {balance.toLocaleString('uk-UA', {
              style: 'currency',
              currency: balanceCurrency,
            })}
          </Typography>
        </Box>
      </Link>
    </Paper>
  );
};

export default AccountListItem;
