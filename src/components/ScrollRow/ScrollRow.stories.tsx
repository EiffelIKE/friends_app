import { ComponentMeta, ComponentStory } from '@storybook/react';
import styled from 'styled-components';
import { ScrollRow } from './ScrollRow';

const StyledScrollRow = styled(ScrollRow)`
  height: 300px;
  width: 500px;
  padding: 20px;
`;

const childrenExample = (
  <div
    style={{
      height: '1600px',
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      padding: '20px',
    }}
  >
    This is a sample content to test the scrollbar
  </div>
);

export default {
  title: 'Components/Atoms/ScrollRow',
  component: ScrollRow,
  argTypes: {
    children: { table: { disable: true } },
  },
  args: {
    children: childrenExample,
  },
} as ComponentMeta<typeof ScrollRow>;

const Template: ComponentStory<typeof ScrollRow> = ({ children }) => (
  <StyledScrollRow>{children}</StyledScrollRow>
);

export const ScrollBar = Template.bind({});
