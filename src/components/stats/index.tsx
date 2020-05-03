import React, { useCallback } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { prop } from 'ramda';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

import { getStatsTabUrl } from 'helpers/urls';

import StructureTab from './structure/StructureTab';
import DynamicsTab from './dynamics/DynamicsTab';

type TabPanelProps = {
  isActive: boolean;
  value: string;
};

const TabPanel: React.FC<TabPanelProps> = ({ isActive, value, children }) => {
  return (
    <div
      role="tabpanel"
      hidden={!isActive}
      id={`stats-tabpanel-${value}`}
      aria-labelledby={`stats-tab-${value}`}
    >
      {isActive && <Box p={3}>{children}</Box>}
    </div>
  );
};

const a11yProps = (value: string) => ({
  id: `stats-tab-${value}`,
  'aria-controls': `stats-tabpanel-${value}`,
});

const tabs: Array<{
  name: string;
  label: string;
  component: React.ComponentType;
}> = [
  {
    name: 'structure',
    label: 'Структура',
    component: StructureTab,
  },
  {
    name: 'dynamics',
    label: 'Динаміка',
    component: DynamicsTab,
  },
];

const Stats: React.FC = () => {
  const { statsType } = useParams();
  const history = useHistory();
  const currentTab: string = statsType || tabs[0].name;

  const handleChange = useCallback(
    (event: React.ChangeEvent<{}>, index: number) => {
      history.push(getStatsTabUrl(tabs[index].name));
    },
    [history]
  );

  return (
    <>
      <AppBar position="static">
        <Tabs
          value={tabs.map(prop('name')).indexOf(currentTab)}
          onChange={handleChange}
          aria-label="stats-tabs"
        >
          {tabs.map(({ name, label }) => (
            <Tab key={name} label={label} {...a11yProps(name)} />
          ))}
        </Tabs>
      </AppBar>
      {tabs.map(tab => {
        const Component = tab.component;
        return (
          <TabPanel
            key={tab.name}
            isActive={currentTab === tab.name}
            value={tab.name}
          >
            <Component />
          </TabPanel>
        );
      })}
    </>
  );
};

export default Stats;
