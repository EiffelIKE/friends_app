import { ComponentMeta, ComponentStory } from '@storybook/react';
import { GalleryModal } from './GalleryModal';
import { photoGaleryMock } from '../../shared/const';

export default {
  title: 'Components/Molecules/GalleryModal',
  component: GalleryModal,
  args: {
    src: photoGaleryMock[0],
    alt: 'Friend Photo 0',
  },
} as ComponentMeta<typeof GalleryModal>;

const Template: ComponentStory<typeof GalleryModal> = ({ src, alt }) => (
  <GalleryModal src={src} alt={alt} onClose={() => {}} />
);

export const Default = Template.bind({});
