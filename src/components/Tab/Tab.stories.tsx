import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Tab } from './Tab';

export default {
  title: 'Components/Tab',
  component: Tab,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Pe9VVOGr2sOvfOcnzzAbvX/Dev-Test?node-id=1%3A1138&t=Lp65noKptBinx4iM-1',
    },
  },
} as ComponentMeta<typeof Tab>;

const Template: ComponentStory<typeof Tab> = ({ active, children }) => (
  <Tab active={active}>{children}</Tab>
);

export const Active = Template.bind({});

Active.args = {
  active: true,
  children: 'Text 1',
};

export const Disabled = Template.bind({});

Disabled.args = {
  active: false,
  children: 'Text 2',
};
