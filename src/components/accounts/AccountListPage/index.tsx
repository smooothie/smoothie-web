import React from 'react';

import Loader from 'components/atoms/Loader';
import useFetchApi from 'hooks/useFetchApi';
import { Account } from '../types';
import AccountList from './AccountList';

const AccountListPage: React.FC = () => {
  const {
    state: { data, fetching, error },
  } = useFetchApi('accounts/', true);
  const accounts = data as Account[];
  if (error) {
    return <div>Щось пішло не так</div>;
  }
  return (
    <>
      {<AccountList accounts={accounts} />}
      {fetching && <Loader />}
    </>
  );
};

export default AccountListPage;
