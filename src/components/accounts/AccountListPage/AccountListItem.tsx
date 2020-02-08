import React from 'react';
import { createFragmentContainer } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

import Link from 'components/atoms/Link';
import urls from 'helpers/urls';

import { iconsMap } from '../helpers';
import { AccountListItem_account } from './__generated__/AccountListItem_account.graphql';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(1),
  },
}));

type Props = {
  account: AccountListItem_account;
};

const PureAccountListItem: React.FC<Props> = ({
  account: { id, name, accountType, balance, balanceCurrency },
}) => {
  const classes = useStyles();
  const Icon = iconsMap[accountType] || iconsMap.default;
  return (
    <Paper elevation={3}>
      <Link to={urls.account.replace(':accountId', id)}>
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

AccountListItem.displayName = 'AccountListItem';

export default AccountListItem;
