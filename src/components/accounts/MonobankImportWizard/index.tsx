import React, { useState } from 'react';

import EnterCredsForm from './EnterCredsForm';
import ChooseAccountsForm from './ChooseAccountsForm';
import Success from './Success';
import { MonobankRawAccount } from './types';
import { Account } from '../types';

type Props = {
  addAccounts: (accounts: Account[]) => void;
  onSuccess: () => void;
  goBack: () => void;
};

type Step = 'enterCreds' | 'chooseAccounts' | 'success';

const MonobankImportWizard: React.FC<Props> = ({
  addAccounts,
  onSuccess,
  goBack,
}) => {
  const [step, setStep] = useState<Step>('enterCreds');
  const [rawAccounts, setRawAccounts] = useState<MonobankRawAccount[]>([]);
  const onCredsSuccess = ({ accounts }: { accounts: MonobankRawAccount[] }) => {
    setRawAccounts(accounts);
    setStep('chooseAccounts');
  };
  const onChooseAccountsSuccess = (accounts: Account[]) => {
    addAccounts(accounts);
    setStep('success');
  };
  if (step === 'enterCreds') {
    return <EnterCredsForm onSuccess={onCredsSuccess} goBack={goBack} />;
  }
  if (step === 'chooseAccounts') {
    return (
      <ChooseAccountsForm
        rawAccounts={rawAccounts}
        onSuccess={onChooseAccountsSuccess}
        goBack={() => setStep('enterCreds')}
      />
    );
  }
  if (step === 'success') {
    return <Success onSuccess={onSuccess} goBack={goBack} />;
  }
  return null;
};

export default MonobankImportWizard;
