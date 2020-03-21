import React, { useState, useCallback } from 'react';

import AddMethodChoice, { AddMethod } from './AddMethodChoice';
import AccountForm from '../AccountForm';
import MonobankImportWizard from '../MonobankImportWizard';
import { Account } from '../types';

type Step = 'addMethodChoice' | AddMethod;

type Props = {
  addAccounts: (accounts: Account[]) => void;
  onSuccess: () => void;
};

const AccountAddWizard: React.FC<Props> = ({ addAccounts, onSuccess }) => {
  const [step, setStep] = useState<Step>('addMethodChoice');
  const goBack = useCallback(() => setStep('addMethodChoice'), []);
  const onAccountFormSuccess = useCallback(
    (account: Account) => {
      addAccounts([account]);
      onSuccess();
    },
    [addAccounts, onSuccess]
  );
  if (step === 'addMethodChoice') {
    return <AddMethodChoice onSubmit={setStep} />;
  }
  if (step === 'accountForm') {
    return <AccountForm onSuccess={onAccountFormSuccess} goBack={goBack} />;
  }
  if (step === 'monobankImport') {
    return (
      <MonobankImportWizard
        addAccounts={addAccounts}
        onSuccess={onSuccess}
        goBack={goBack}
      />
    );
  }
  return null;
};

export default AccountAddWizard;
