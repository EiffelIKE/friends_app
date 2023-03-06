import styled from 'styled-components';
import { Button } from '../Button';

export const CloseButton = styled(Button)`
  position: absolute;
  top: 60px;
  right: 60px;
  @media screen and (max-width: 578px) {
    top: 40px;
    right: 40px;
  }
`;

export const ImageContainer = styled.div`
  width: 68.4vw;
  height: 64vh;
  justify-self: center;
  @media screen and (max-width: 578px) {
    width: 100%;
    height: 300px;
  }
`;
