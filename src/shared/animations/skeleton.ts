import { css, keyframes } from 'styled-components';

const skeletonKeyFrames = keyframes`
  from {
    background-color: #c2cfd6;
  }
  to {
    background-color: #f0f3f5;
  }
`;

export const skeletonLoading = ({ time = '1s' }: { time?: string }) => css`
  animation: ${skeletonKeyFrames} ${time} linear infinite alternate;
`;
