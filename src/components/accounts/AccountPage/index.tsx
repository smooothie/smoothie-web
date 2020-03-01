import React from 'react';
import { useParams } from 'react-router-dom';

import useFetchApi from 'hooks/useFetchApi';
import Loader from 'components/atoms/Loader';
// import TransactionsList from 'components/transactions/TransactionsList';
import { Account as AccountType } from '../types';
import Account from './Account';

const AccountPage: React.FC = () => {
  const { accountId } = useParams();
  const {
    state: { data, fetching, error },
  } = useFetchApi(`accounts/${accountId}`, false);
  const account = data as AccountType | null;
  if (error) {
    return <div>Щось пішло не так</div>;
  }
  if (fetching) {
    return <Loader />;
  }
  return (
    <>
      {account && <Account account={account} />}
      {/*<TransactionsList accountId={accountId} />*/}
    </>
  );
};

export default AccountPage;
