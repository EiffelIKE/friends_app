import { ComponentMeta, ComponentStory } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { expect, jest } from '@storybook/jest';
import { DetailsContainer } from './DetailsContainer';
import { DefaultFriendDetails } from '../FriendDetail/FriendDetail.stories';

const mockFn = jest.fn();

export default {
  title: 'Components/Molecules/DetailsContainer',
  component: DetailsContainer,
} as ComponentMeta<typeof DetailsContainer>;

const Template: ComponentStory<typeof DetailsContainer> = ({
  src,
  firstName,
  lastName,
  active,
  status,
  tabs,
  tabsChildren,
  onBack,
}) => (
  <DetailsContainer
    src={src}
    firstName={firstName}
    lastName={lastName}
    active={active}
    status={status}
    tabs={tabs}
    tabsChildren={tabsChildren}
    onBack={onBack}
  />
);

export const DefaultDetailsContainer = Template.bind({});

DefaultDetailsContainer.args = {
  ...DefaultFriendDetails.args,
  onBack: () => mockFn(),
};

DefaultDetailsContainer.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = canvas.getByRole('button');

  userEvent.click(button);
  expect(mockFn).toBeCalled();
};

// export const WithOverFlowName = Template.bind({});

// WithOverFlowName.args = {
//   lastName: 'SomeReallyBigLastNameHere',
// };

// export const NoName = Template.bind({});

// NoName.args = {
//   lastName: undefined,
//   firstName: undefined,
// };

// export const ClickTab = Template.bind({});

// ClickTab.play = async ({ canvasElement }) => {
//   const canvas = within(canvasElement);
//   const getElement = (text: string) => canvas.getByText(text);

//   const tabToClick = getElement('Photos');

//   userEvent.click(tabToClick);
//   const tabContent = await canvas.findByText(/tab2 content/i);
//   expect(tabContent).toBeInTheDocument();
// };
