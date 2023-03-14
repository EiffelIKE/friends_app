import { expect } from '@storybook/jest';
import { within, userEvent } from '@storybook/testing-library';
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

const TabsChildren = [
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

DefaultTabDada.args = {
  tabChildrens: TabsChildren,
};

DefaultTabDada.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const getElemetText = (text: string | RegExp) => canvas.getByText(text);
  const findChildren = (text: string | RegExp) => canvas.findByText(text);
  const queryELement = (text: string | RegExp) => canvas.queryByText(text);

  const tab1 = getElemetText('Info');
  const tab2 = getElemetText('Photos');

  userEvent.click(tab2);
  const children2 = await findChildren('Tab2 content');
  expect(children2).toBeInTheDocument();

  const childrenHidden1 = queryELement('Tab1 content');
  expect(childrenHidden1).not.toBeInTheDocument();

  userEvent.click(tab1);
  const children1 = await findChildren('Tab1 content');
  expect(children1).toBeInTheDocument();

  const childrenHidden2 = queryELement('Tab2 content');
  expect(childrenHidden2).not.toBeInTheDocument();
};

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
