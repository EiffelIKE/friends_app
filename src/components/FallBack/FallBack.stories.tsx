import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FallBack } from './FallBack';

export default {
  title: 'Components/FallBack',
  component: FallBack,
} as ComponentMeta<typeof FallBack>;

const Template: ComponentStory<typeof FallBack> = () => <FallBack />;

export const FallBackSuspense = Template.bind({});
