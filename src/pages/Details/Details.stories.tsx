import { ComponentMeta, ComponentStory } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { withRouter } from 'storybook-addon-react-router-v6';
import { Details } from './Details';
import { detailsMock } from '../../shared/const';

export default {
  title: 'Components/Pages/Details',
  component: Details,
  args: {
    data: detailsMock,
  },
  decorators: [withRouter],
} as ComponentMeta<typeof Details>;

const Template: ComponentStory<typeof Details> = ({ data }) => (
  <Details data={data} />
);

export const DefaultFriendDetails = Template.bind({});

export const ClickPictureFlow = Template.bind({});

ClickPictureFlow.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const getElement = (text: string | RegExp) => canvas.getByText(text);

  const tabToClick = getElement(/photos/i);

  userEvent.click(tabToClick);
  const photos = await canvas.findAllByAltText(/friend photo/i);
  expect(photos).toHaveLength(8);

  // Open Modal
  userEvent.click(photos[1]);
  const modalPhoto = await canvas.findByAltText(/open/i);
  expect(modalPhoto).toBeInTheDocument();

  const closeButton = await canvas.findByRole('button', {
    name: 'close button',
  });

  // Close modal
  userEvent.click(closeButton);
  const inspectPhoto = await canvas.findByAltText(/open/i);
  expect(inspectPhoto).not.toBeInTheDocument();
};
