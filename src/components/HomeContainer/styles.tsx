import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { Row } from '../Row';
import { ScrollRow } from '../ScrollRow';

export const FriendsContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 714px;
  margin: 0;
  padding: 0;
  @media screen and (max-width: 576px) {
    width: 100vw;
  }
`;

export const TextRow = styled(Row)`
  margin-top: 30px;
  padding: 0 40px;
  overflow: hidden;
  @media screen and (max-width: 400px) {
    padding: 0 30px;
  }
`;

export const CardRow = styled(ScrollRow)`
  margin-left: 0;
  margin-right: 0;
  padding: 0 40px 30px;
  max-height: 555px;
  @media screen and (max-width: 576px) {
    max-height: none;
  }
  @media screen and (max-width: 400px) {
    padding: 0 30px 30px;
  }
  & > * {
    padding: 0;
  }
`;
