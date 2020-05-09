import React, { useCallback } from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core';
import { useParams } from 'react-router-dom';

import useFetchApi from 'helpers/hooks/useFetchApi';
import Loader from 'components/atoms/Loader';
import ErrorMessage from 'components/atoms/ErrorMessage';
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
    adder,
  } = useFetchApi(`accounts/${accountId}`, false);
  const account = data as Account | null;
  const accountUpdater = useCallback(
    (updatedData: Partial<Account>) => {
      adder({ ...account, ...updatedData });
    },
    [account, adder]
  );
  if (error) {
    return <ErrorMessage />;
  }
  if (fetching) {
    return <Loader />;
  }
  if (account === null) {
    return null;
  }

  const {
    id,
    itemType,
    name,
    balance,
    balanceCurrency,
    creditLimit,
    apiAccountId,
  } = account;
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
        {creditLimit > 0 && (
          <Box display="flex" justifyContent="space-between">
            <Typography>Кредитний ліміт</Typography>
            <Typography>
              {creditLimit.toLocaleString('uk-UA', {
                style: 'currency',
                currency: balanceCurrency,
              })}
            </Typography>
          </Box>
        )}
      </Box>
      <TransactionsList
        accountId={id}
        accountUpdater={accountUpdater}
        apiAccountId={apiAccountId}
      />
    </Box>
  );
};

export default AccountPage;
