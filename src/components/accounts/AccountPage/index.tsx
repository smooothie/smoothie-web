import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core';
import { useParams } from 'react-router-dom';

import useFetchApi from 'hooks/useFetchApi';
import Loader from 'components/atoms/Loader';
import { TransactionsList } from 'components/transactions';
import { Account } from '../types';
import { iconsMap } from '../helpers';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(1),
  },
}));

const AccountPage: React.FC = () => {
  const { accountId } = useParams();
  const classes = useStyles();
  const {
    state: { data, fetching, error },
  } = useFetchApi(`accounts/${accountId}`, false);
  const account = data as Account | null;
  if (error) {
    return <div>Щось пішло не так</div>;
  }
  if (fetching) {
    return <Loader />;
  }
  if (account === null) {
    return null;
  }

  const { id, itemType, name, balance, balanceCurrency } = account;
  const Icon = iconsMap[itemType] || iconsMap.default;
  return (
    <Box marginTop={4}>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Icon className={classes.icon} />
        <Typography component="h1" variant="h5" align="center">
          {name}
        </Typography>
      </Box>
      <Box marginTop={3}>
        <Box display="flex" justifyContent="space-between">
          <Typography>Баланс</Typography>
          <Typography>
            {balance.toLocaleString('uk-UA', {
              style: 'currency',
              currency: balanceCurrency,
            })}
          </Typography>
        </Box>
      </Box>
      <TransactionsList accountId={id} />
    </Box>
  );
};

export default AccountPage;
