import React from 'react';
import { createFragmentContainer } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core';

import { Account_account } from './__generated__/Account_account.graphql';
import { iconsMap } from '../helpers';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(1),
  },
}));

type Props = {
  account: Account_account;
};

const PureAccount: React.FC<Props> = ({
  account: { itemType, name, balance, balanceCurrency },
}) => {
  const classes = useStyles();
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
    </Box>
  );
};

const Account = createFragmentContainer(PureAccount, {
  account: graphql`
    fragment Account_account on AccountNode {
      id
      name
      itemType
      balance
      balanceCurrency
    }
  `,
});

Account.displayName = 'Account';

export default Account;
