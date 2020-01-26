import React from 'react';
import { createFragmentContainer } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AccountBalanceWalletRoundedIcon from '@material-ui/icons/AccountBalanceWalletRounded';
import MonetizationOnRoundedIcon from '@material-ui/icons/MonetizationOnRounded';
import CreditCardRoundedIcon from '@material-ui/icons/CreditCardRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import { makeStyles } from '@material-ui/core';

import { AccountListItem_account } from './__generated__/AccountListItem_account.graphql';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(1),
  },
}));

type Props = {
  account: AccountListItem_account;
};

const iconsMap: Record<string, React.ComponentType<SvgIconProps>> = {
  cashaccount: AccountBalanceWalletRoundedIcon,
  counterpartyaccount: PersonRoundedIcon,
  bankaccount: CreditCardRoundedIcon,
  default: MonetizationOnRoundedIcon,
};

const PureAccountListItem: React.FC<Props> = ({
  account: { name, accountType, balance, balanceCurrency },
}) => {
  const classes = useStyles();
  const Icon = iconsMap[accountType] || iconsMap.default;
  return (
    <Paper elevation={3}>
      <Box padding={1}>
        <Box display="flex" alignItems="center">
          <Icon className={classes.icon} />
          <Typography variant="h6" component="h3">
            {name}
          </Typography>
        </Box>
        <Typography>
          {balance.toLocaleString('en-US', {
            style: 'currency',
            currency: balanceCurrency,
          })}
        </Typography>
      </Box>
    </Paper>
  );
};

const AccountListItem = createFragmentContainer(PureAccountListItem, {
  account: graphql`
    fragment AccountListItem_account on AccountNode {
      id
      name
      accountType
      balance
      balanceCurrency
    }
  `,
});

AccountListItem.displayName = 'Account';

export default AccountListItem;
