import { Container, Col } from 'react-bootstrap';
import styled from 'styled-components';

import { Availability } from '../Availability';
import { Row } from '../Row';

export const DetailsContainer = styled(Container)`
  padding: 0;
  margin: 0;
  width: 59.37vh;
  @media screen and (max-width: 608px) {
    width: 100vw;
    height: 100vh;
  }
  @media screen and (min-width: 576px) {
    max-width: 100vw;
  }
`;

export const DetailsCol = styled(Col)`
  display: flex;
  flex-direction: column;
  gap: 3vh;
  padding: 5.8vh;
  @media screen and (max-width: 608px) {
    width: 100vw;
    padding: calc(60 / 608 * 100vw);
  }
`;

export const InfoRow = styled(Row)`
  display: flex;
  flex-direction: column;
  gap: 2.3vh;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 15vh;
  height: 15vh;
`;

export const StyledAvilable = styled(Availability)`
  position: absolute;
  top: -9px;
  left: -7px;
`;
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
