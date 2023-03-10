import { ComponentMeta, ComponentStory } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { FriendDetail } from './FriendDetail';
import { friendListMock, tabsDataMock } from '../../shared/const';
import { TabsChildren } from '../TabData/TabData.stories';

export default {
  title: 'Components/Molecules/FriendDetail',
  component: FriendDetail,
  args: {
    tabs: tabsDataMock,
    tabsChildren: TabsChildren,
    src: friendListMock[0].img,
    firstName: friendListMock[0].first_name,
    lastName: friendListMock[0].last_name,
    active: friendListMock[0].available,
    status: friendListMock[0].status,
  },
} as ComponentMeta<typeof FriendDetail>;

const Template: ComponentStory<typeof FriendDetail> = ({
  src,
  firstName,
  lastName,
  active,
  status,
  tabs,
  tabsChildren,
}) => (
  <FriendDetail
    src={src}
    firstName={firstName}
    lastName={lastName}
    active={active}
    status={status}
    tabs={tabs}
    tabsChildren={tabsChildren}
  />
);

export const DefaultFriendDetails = Template.bind({});

export const WithOverFlowName = Template.bind({});

WithOverFlowName.args = {
  lastName: 'SomeReallyBigLastNameHere',
};

export const ClickTab = Template.bind({});

ClickTab.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const getElement = (text: string) => canvas.getByText(text);

  const tabToClick = getElement('Photos');

  userEvent.click(tabToClick);
  const tabContent = await canvas.findByText(/tab2 content/i);
  await expect(tabContent).toBeInTheDocument();
};
