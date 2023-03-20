import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SectionContainer } from './SectionContainer';

const childrenExample = (
  <div
    style={{
      width: '500px',
      height: '600px',
    }}
  />
);

export default {
  title: 'Components/Atoms/SectionContainer',
  component: SectionContainer,
  argTypes: {
    children: { table: { disable: true } },
  },
  args: {
    children: childrenExample,
  },
} as ComponentMeta<typeof SectionContainer>;

const Template: ComponentStory<typeof SectionContainer> = ({ children }) => (
  <SectionContainer>{children}</SectionContainer>
);

export const DefaultContainer = Template.bind({});
