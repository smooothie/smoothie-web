import React from 'react';

import useFetchApi from 'hooks/useFetchApi';

import DynamicsChart from './DynamicsChart';

const DynamicsTab: React.FC = () => {
  const {
    state: { data },
  } = useFetchApi('stats/dynamics/spending', true, { currency: 'UAH' });
  return <DynamicsChart data={data} periodType="month" />;
};

export default DynamicsTab;
