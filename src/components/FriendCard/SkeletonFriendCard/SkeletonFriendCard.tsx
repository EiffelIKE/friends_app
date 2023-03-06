import { FC } from 'react';
import { Col } from 'react-bootstrap';
import {
  SkeletonText,
  SkeletonImgContainer,
  SkeletonStatus,
  SkeletonButton,
} from './styles';

import { InfoContainer, Container } from '../styles';

export const SkeletonFriendCard: FC = () => {
  return (
    <Container>
      <Col md="1">
        <SkeletonImgContainer />
      </Col>
      <InfoContainer xs="6" md="8">
        <SkeletonText />
        <SkeletonStatus />
      </InfoContainer>
      <SkeletonButton />
    </Container>
  );
};
