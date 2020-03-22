import React, { useState } from 'react';

import ImportForm from './ImportForm';
import Success from './Success';
import { Transaction } from '../types';

type Props = {
  addTransactions: (transactions: Transaction[]) => void;
  onSuccess: () => void;
  goBack: () => void;
  apiAccountId: string;
};

type Step = 'importForm' | 'success';

const MonobankImportWizard: React.FC<Props> = ({
  addTransactions,
  onSuccess,
  goBack,
  apiAccountId,
}) => {
  const [step, setStep] = useState<Step>('importForm');
  const onImportSuccess = (transactions: Transaction[]) => {
    addTransactions(transactions);
    setStep('success');
  };
  if (step === 'importForm') {
    return (
      <ImportForm
        onSuccess={onImportSuccess}
        goBack={goBack}
        apiAccountId={apiAccountId}
      />
    );
  }
  if (step === 'success') {
    return <Success onSuccess={onSuccess} goBack={goBack} />;
  }
  return null;
};

export default MonobankImportWizard;
