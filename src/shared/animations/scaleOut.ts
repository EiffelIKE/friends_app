import { keyframes, css } from 'styled-components';

const scaleKeyframes = keyframes`
from {
  scale: 0.05;
  filter: blur(4px);
}
to {
  scale: 1;
  filter: blur(0);
}
`;

export const scaleOut = ({ time = '0.3s' }: { time?: string }) => css`
  animation: ${scaleKeyframes} ${time} ease-out;
`;
