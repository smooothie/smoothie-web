import React from 'react';
import { QueryRenderer } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import environment from 'environment';
import Loader from 'components/atoms/Loader';

import AccountList from './AccountList';
import { AccountListPageQuery } from './__generated__/AccountListPageQuery.graphql';

const Query = graphql`
  query AccountListPageQuery {
    accounts(itemType: "visible") {
      ...AccountList_accounts
    }
  }
`;

const AccountListPage: React.FC = () => (
  <QueryRenderer<AccountListPageQuery>
    environment={environment}
    query={Query}
    render={({ error, props }) => {
      if (error) {
        return <div>{error.message}</div>;
      } else if (props) {
        return props.accounts === null ? null : (
          <AccountList accounts={props.accounts} />
        );
      }
      return <Loader />;
    }}
    variables={{}}
  />
);

export default AccountListPage;
