import React from 'react';
import { VictoryChart, VictoryBar, VictoryTheme } from 'victory';
import moment from 'moment';

import { DynamicsData, PeriodType } from '../structure/types';

type Props = {
  data: DynamicsData[];
  periodType: PeriodType;
};

const DynamicsChart: React.FC<Props> = ({ data, periodType }) => {
  return (
    <VictoryChart theme={VictoryTheme.material} domainPadding={10}>
      <VictoryBar
        data={data}
        x={datum => moment(datum.period).format('MMM YY')}
        y="totalAmount"
      />
    </VictoryChart>
  );
};

export default DynamicsChart;
