import React from 'react';
import { VictoryPie, VictoryLegend, VictoryLabel, VictoryTheme } from 'victory';

import { StructureData } from './types';

type Props = {
  data: StructureData[];
};

const getLegendLabel = (totalAmount: number) => (
  item: StructureData,
  index: number
) => {
  const formattedAmount = item.totalAmount.toLocaleString('uk-UA', {
    style: 'currency',
    currency: item.currency,
  });
  const formattedPercentage = ((item.totalAmount * 100) / totalAmount).toFixed(
    2
  );
  // eslint-disable-next-line
  const name = `${index + 1} - ${item.categoryName}: ${formattedAmount} (${formattedPercentage}%)`;
  return { name };
};

const StructureChart: React.FC<Props> = ({ data }) => {
  const totalAmount = data.reduce((acc, curr) => acc + curr.totalAmount, 0);
  return (
    <div>
      <VictoryPie
        data={data}
        x="categoryName"
        y="totalAmount"
        width={300}
        height={300}
        colorScale="qualitative"
        labels={({ index }) => index + 1}
        labelRadius={110}
        labelComponent={<VictoryLabel style={{ fontSize: '9px' }} />}
        theme={VictoryTheme.material}
      />
      <div>
        <VictoryLegend
          title="Позначення"
          centerTitle={true}
          data={data.map(getLegendLabel(totalAmount))}
          colorScale="qualitative"
          height={450}
          theme={VictoryTheme.material}
        />
      </div>
    </div>
  );
};

export default StructureChart;
