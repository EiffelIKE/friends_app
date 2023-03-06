import { ComponentMeta, ComponentStory, DecoratorFn } from '@storybook/react';
import { SectionContainer } from './SectionContainer';

const withContainer: DecoratorFn = (StroryFn) => {
  return (
    <div
      style={{
        width: '500px',
      }}
    >
      <StroryFn />
    </div>
  );
};

const childrenExample = (
  <div
    style={{
      height: '300px',
    }}
  />
);

export default {
  title: 'Components/Atoms/SectionContainer',
  component: SectionContainer,
  decorators: [withContainer],
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

export const WithExmapleEmptyContent = Template.bind({});
