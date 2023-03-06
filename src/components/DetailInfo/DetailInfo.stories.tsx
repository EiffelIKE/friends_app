import { ComponentMeta, ComponentStory, DecoratorFn } from '@storybook/react';
import styled from 'styled-components';
import { DetailInfo } from './DetailInfo';
import { detailsDataMock } from '../../shared/const';

const Container = styled.div`
  @media screen and (min-width: 608px) {
    width: 608px;
  }
  width: 100%;
`;

const withContainer: DecoratorFn = (Storyfn) => {
  return (
    <Container>
      <Storyfn />
    </Container>
  );
};

export default {
  title: 'Components/Molecules/DetailInfo',
  component: DetailInfo,
  argTypes: {
    children: { table: { disable: true } },
  },
  decorators: [withContainer],
} as ComponentMeta<typeof DetailInfo>;

const Template: ComponentStory<typeof DetailInfo> = ({
  data,
  children,
  itemClassName,
  containerClassName,
}) => (
  <DetailInfo
    data={data}
    itemClassName={itemClassName}
    containerClassName={containerClassName}
  >
    {children}
  </DetailInfo>
);

export const Filled = Template.bind({});

export const Example = Template.bind({});

Example.argTypes = {
  children: { table: { disable: false }, control: { type: 'text' } },
};

Example.args = {
  data: [
    {
      obj0key: 'keyValue',
    },
    {
      obj1key: 'keyValue',
      obj1key2: 'key2Value',
    },
    {
      obj2key:
        'key value with so much more than 27 characters so layout should be column',
    },
  ],
  children: <>Childrens goes here</>,
};

Filled.args = {
  data: detailsDataMock,
};

export const Empty = Template.bind({});

Empty.args = {
  data: [],
};
