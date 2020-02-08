import React from 'react';
import { QueryRenderer } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';
import { useParams } from 'react-router-dom';

import environment from 'environment';
import Loader from 'components/atoms/Loader';
import TransactionsList from 'components/transactions/TransactionsList';

import Account from './Account';
import { AccountPageQuery } from './__generated__/AccountPageQuery.graphql';

const Query = graphql`
  query AccountPageQuery($accountID: ID!) {
    account(id: $accountID) {
      ...Account_account
    }
    transactions(accountFrom: $accountID) {
      ...TransactionsList_transactions
    }
  }
`;

const AccountPage: React.FC = () => {
  const { accountId } = useParams();
  return (
    <QueryRenderer<AccountPageQuery>
      environment={environment}
      query={Query}
      render={({ error, props }) => {
        if (error) {
          return <div>{error.message}</div>;
        } else if (props) {
          return (
            <>
              {props.account && <Account account={props.account} />}
              {props.transactions && (
                <TransactionsList
                  transactions={props.transactions}
                  accountId={props?.account?.__id}
                />
              )}
            </>
          );
        }
        return <Loader />;
      }}
      variables={{ accountID: accountId || '' }}
    />
  );
};

export default AccountPage;
