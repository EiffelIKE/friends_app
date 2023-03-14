import styled from 'styled-components';
import { CloseButton } from '../CloseButton';
import { scaleOut } from '../../shared/animations';

export const StyledCloseButton = styled(CloseButton)`
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
  ${scaleOut({})}
  @media screen and (max-width: 578px) {
    width: 100%;
    height: 300px;
  }
`;
