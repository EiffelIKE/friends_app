import { Row as RBRow } from 'react-bootstrap';
import styled from 'styled-components';

export const Row = styled(RBRow)`
  padding: 0;
  margin: 0;
  & > * {
    padding: 0;
  }
`;
