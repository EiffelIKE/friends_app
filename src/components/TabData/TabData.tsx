import { FC } from 'react';
import { CardContainer } from '../CardContainer';
import { TabCardRow, TabRow, TabContainer } from './styles';
import { Tab } from '../Tab';
import { Text } from '../Text';
import type { TabDataProps } from './types';

export const TabData: FC<TabDataProps> = ({
  tabs,
  activeTab,
  onClick,
  children,
}) => {
  return (
    <TabRow>
      <TabContainer>
        {tabs.map((tab) => {
          return (
            <Tab
              key={tab.id}
              active={activeTab === tab.id}
              onClick={() => onClick(tab.id)}
            >
              <Text disabled={activeTab !== tab.id}>{tab.title}</Text>
            </Tab>
          );
        })}
      </TabContainer>
      <TabCardRow>
        <CardContainer>{children}</CardContainer>
      </TabCardRow>
    </TabRow>
  );
};
