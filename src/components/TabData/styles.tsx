import styled from 'styled-components';
import { Col } from 'react-bootstrap';
import { ScrollRow } from '../ScrollRow';

export const TabRow = styled(Col)`
  display: flex;
  flex-direction: column;
`;

export const TabContainer = styled(ScrollRow)`
  width: 100%;
  margin: 0;
  padding-bottom: 10px;
`;

export const Ul = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  display: 100%;
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
