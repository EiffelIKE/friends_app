import styled from 'styled-components';
import { Button } from '../Button';

export const RelativeContainer = styled.div`
  position: relative;
`;

export const BackButton = styled(Button)`
  position: absolute;
  left: -120px;
  @media screen and (max-width: 900px) {
    left: 83%;
    top: 5.8vh;
  }
`;
