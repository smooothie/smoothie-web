import React, { useState, useCallback } from 'react';
import { isNil } from 'ramda';

import AddMethodChoice, { AddMethod } from './AddMethodChoice';
import TransactionForm from '../TransactionForm';
import MonobankImportWizard from '../MonobankImportWizard';
import { Transaction } from '../types';

type Step = 'addMethodChoice' | AddMethod;

type Props = {
  addTransactions: (transactions: Transaction[]) => void;
  onSuccess: () => void;
  currentAccountId?: number;
  apiAccountId?: string | null;
};

type TransactionFormWrapperProps = Omit<Props, 'apiAccountId'> & {
  goBack?: () => void;
};

const TransactionFormWrapper: React.FC<TransactionFormWrapperProps> = ({
  addTransactions,
  onSuccess,
  currentAccountId,
  goBack,
}) => {
  const onTransactionFormSuccess = useCallback(
    (transaction: Transaction) => {
      addTransactions([transaction]);
      onSuccess();
    },
    [addTransactions, onSuccess]
  );
  return (
    <TransactionForm
      onSuccess={onTransactionFormSuccess}
      goBack={goBack}
      currentAccountId={currentAccountId}
    />
  );
};

type WizardProps = Omit<Props, 'apiAccountId'> & {
  apiAccountId: string;
};

const Wizard: React.FC<WizardProps> = ({
  apiAccountId,
  currentAccountId,
  addTransactions,
  onSuccess,
}) => {
  const [step, setStep] = useState<Step>('addMethodChoice');
  const goBack = useCallback(() => setStep('addMethodChoice'), []);
  if (step === 'addMethodChoice') {
    return <AddMethodChoice onSubmit={setStep} />;
  }
  if (step === 'manualAdd') {
    return (
      <TransactionFormWrapper
        addTransactions={addTransactions}
        onSuccess={onSuccess}
        goBack={goBack}
        currentAccountId={currentAccountId}
      />
    );
  }
  if (step === 'monobankImport') {
    return (
      <MonobankImportWizard
        addTransactions={addTransactions}
        onSuccess={onSuccess}
        goBack={goBack}
        apiAccountId={apiAccountId}
      />
    );
  }
  return null;
};

const AccountAddWizard: React.FC<Props> = props => {
  const { apiAccountId, ...rest } = props;

  if (!isNil(apiAccountId)) {
    return <Wizard apiAccountId={apiAccountId} {...rest} />;
  }

  return <TransactionFormWrapper {...rest} />;
};

export default AccountAddWizard;
