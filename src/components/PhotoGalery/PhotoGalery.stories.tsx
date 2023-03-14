import { ComponentMeta, ComponentStory, DecoratorFn } from '@storybook/react';
import styled from 'styled-components';
import { PhotoGalery } from './PhotoGalery';
import { photoGaleryMock } from '../../shared/const';

const Container = styled.div`
  @media screen and (min-width: 608px) {
    width: 450px;
    height: 100vh;
  }
  display: grid;
  place-content: center;
  width: 80%;
`;

const withContainer: DecoratorFn = (Storyfn) => {
  return (
    <Container>
      <Storyfn />
    </Container>
  );
};

export default {
  title: 'Components/Molecules/PhotoGalery',
  component: PhotoGalery,
  args: {
    photos: photoGaleryMock,
  },
} as ComponentMeta<typeof PhotoGalery>;

const Template: ComponentStory<typeof PhotoGalery> = ({ photos }) => (
  <PhotoGalery photos={photos} onClick={() => {}} />
);

export const Default = Template.bind({});

export const WithContainer = Template.bind({});

WithContainer.decorators = [withContainer];
