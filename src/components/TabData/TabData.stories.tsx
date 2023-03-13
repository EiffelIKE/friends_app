import { ComponentMeta, ComponentStory, DecoratorFn } from '@storybook/react';
import styled from 'styled-components';
import { TabData } from './TabData';
import { tabsDataMock } from '../../shared/const';
import type { TabObj } from '../../shared/types';

const Container = styled.div`
  @media screen and (min-width: 608px) {
    width: 608px;
  }
  width: 100%;
`;

const ChildrenContainer = styled.div`
  display: grid;
  place-content: center;
  width: 100%;
  height: 100%;
`;

export const TabsChildren = [
  <ChildrenContainer key={0}>Tab1 content</ChildrenContainer>,
  <ChildrenContainer key={0}>Tab2 content</ChildrenContainer>,
];

const withContainer: DecoratorFn = (Storyfn) => {
  return (
    <Container>
      <Storyfn />
    </Container>
  );
};

export default {
  title: 'Components/Molecules/TabData',
  component: TabData,
  args: {
    tabs: tabsDataMock,
    tabChildrens: TabsChildren,
  },
  decorators: [withContainer],
} as ComponentMeta<typeof TabData>;

const Template: ComponentStory<typeof TabData> = ({ tabs, tabChildrens }) => (
  <TabData tabs={tabs} tabChildrens={tabChildrens} />
);

export const DefaultTabDada = Template.bind({});

export const MoreTabsThanSons = Template.bind({});

MoreTabsThanSons.args = {
  tabs: [
    ...tabsDataMock,
    {
      id: 3,
      title: 'Skills',
    },
  ],
};

const getTabs: (num: number) => Array<TabObj> = (num: number) => {
  if (num === 2) {
    return [{ id: 2, title: `Tab${2}` }];
  }
  return [{ id: num, title: `Tab${num}` }, ...getTabs(num - 1)];
};

export const OverFlowTabs = Template.bind({});

OverFlowTabs.args = {
  tabs: [...tabsDataMock, ...getTabs(9)],
};
