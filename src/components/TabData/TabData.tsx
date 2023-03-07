import { FC } from 'react';
import { CardContainer } from '../CardContainer';
import { TabCardRow, TabRow, TabContainer, Ul } from './styles';
import { Tab } from '../Tab';
import { Text } from '../Text';
import { useHandleTabs } from '../../shared/hooks';
import type { TabDataProps } from './types';

export const TabData: FC<TabDataProps> = ({ tabs, tabChildrens }) => {
  const { activeTab, handleTab, renderNode } = useHandleTabs({ tabChildrens });

  return (
    <TabRow>
      <TabContainer>
        <Ul>
          {tabs.map((tab) => {
            return (
              <li key={tab.id}>
                <Tab
                  active={activeTab === tab.id}
                  onClick={() => handleTab(tab.id)}
                >
                  <Text disabled={activeTab !== tab.id}>{tab.title}</Text>
                </Tab>
              </li>
            );
          })}
        </Ul>
      </TabContainer>
      <TabCardRow>
        <CardContainer>{renderNode}</CardContainer>
      </TabCardRow>
    </TabRow>
  );
};
