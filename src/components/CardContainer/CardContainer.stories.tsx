import { ComponentMeta, ComponentStory, DecoratorFn } from '@storybook/react';
import { CardContainer } from './CardContainer';

const withContainer: DecoratorFn = (StroryFn) => {
  return (
    <div
      style={{
        width: '300px',
      }}
    >
      <StroryFn />
    </div>
  );
};

const childrenExample = (
  <div
    style={{
      height: '200px',
    }}
  />
);

export default {
  title: 'Components/CardContainer',
  component: CardContainer,
  decorators: [withContainer],
  argTypes: {
    children: { table: { disable: true } },
  },
  args: {
    children: childrenExample,
  },
} as ComponentMeta<typeof CardContainer>;

const Template: ComponentStory<typeof CardContainer> = ({ children }) => (
  <CardContainer>{children}</CardContainer>
);

export const WithContent = Template.bind({});
