import styled from 'styled-components';
import { Col } from 'react-bootstrap';
import { Row } from '../Row';
import { ScrollRow } from '../ScrollRow';

export const TabRow = styled(Col)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const TabContainer = styled(ScrollRow)`
  display: flex;
  width: 100%;
  margin: 0;
`;

export const TabCardRow = styled(ScrollRow)`
  max-height: 47.6vh;
  height: 47.6vh;
  padding: 0;
  margin: 0;
  & > * {
    padding: 0;
  }
`;
