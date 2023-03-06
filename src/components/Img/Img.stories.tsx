import { ComponentMeta, ComponentStory, DecoratorFn } from '@storybook/react';
import { Img } from './Img';

const withBigContainer: DecoratorFn = (StoryFn) => {
  return (
    <div style={{ width: '150px', height: '150px' }}>
      <StoryFn />
    </div>
  );
};

const withTinyContainer: DecoratorFn = (StoryFn) => {
  return (
    <div style={{ width: '60px', height: '60px' }}>
      <StoryFn />
    </div>
  );
};

export default {
  title: 'Components/Atoms/Img',
  component: Img,
  args: {
    src: 'https://reqres.in/img/faces/8-image.jpg',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Pe9VVOGr2sOvfOcnzzAbvX/Dev-Test?node-id=1%3A641&t=7qJqNxSftcUr4KDU-1',
    },
  },
} as ComponentMeta<typeof Img>;

const Template: ComponentStory<typeof Img> = ({ src, alt }) => (
  <Img src={src} alt={alt && alt} />
);

export const TinyImg = Template.bind({});

TinyImg.decorators = [withTinyContainer];

TinyImg.args = {
  alt: 'Img with container 60x60',
};

export const BigImg = Template.bind({});

BigImg.decorators = [withBigContainer];

BigImg.args = {
  alt: 'Img with container 150x150',
};
