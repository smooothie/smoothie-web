import React from 'react';

import useFetchApi from 'helpers/hooks/useFetchApi';

import StructureChart from './StructureChart';

const StructureTab: React.FC = () => {
  const {
    state: { data },
  } = useFetchApi('stats/structure/spending', true, { currency: 'UAH' });
  return <StructureChart data={data} />;
};

export default StructureTab;
