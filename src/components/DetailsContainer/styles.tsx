import styled from 'styled-components';
import { BackButton } from '../BackButton';

export const RelativeContainer = styled.div`
  position: relative;
`;

export const StyledBackButton = styled(BackButton)`
  position: absolute;
  left: -120px;
  @media screen and (max-width: 900px) {
    left: 81%;
    top: 5.8vh;
  }
`;
