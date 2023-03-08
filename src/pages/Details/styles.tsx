import styled from 'styled-components';
import { Button } from '../../components';

export const DetailsContainer = styled.div`
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
