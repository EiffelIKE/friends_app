import { ComponentMeta, ComponentStory } from '@storybook/react';
import styled from 'styled-components';
import { ModalContainer } from './ModalContainer';

const Children = styled.div`
  width: 300px;
  height: 300px;
  background-color: #ffffff;
  border-radius: 4px;
  display: grid;
  place-content: center;
`;

export default {
  title: 'Components/Atoms/ModalContainer',
  component: ModalContainer,
} as ComponentMeta<typeof ModalContainer>;

const Template: ComponentStory<typeof ModalContainer> = ({ children }) => (
  <ModalContainer>{children}</ModalContainer>
);

export const Default = Template.bind({});

export const WithContent = Template.bind({});

WithContent.args = {
  children: <Children>Children example</Children>,
};
