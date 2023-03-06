import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Availability } from './Availability';

export default {
  title: 'Components/Atoms/Availability',
  component: Availability,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Pe9VVOGr2sOvfOcnzzAbvX/Dev-Test?node-id=1%3A1529&t=Dahbly8apBrYvnI3-1',
    },
  },
} as ComponentMeta<typeof Availability>;

const Template: ComponentStory<typeof Availability> = ({ active, size }) => (
  <Availability active={active} size={size} />
);

export const ActiveMd = Template.bind({});

ActiveMd.args = {
  active: true,
  size: 'md',
};

export const NonActiveMd = Template.bind({});

ActiveMd.args = {
  active: false,
  size: 'md',
};
