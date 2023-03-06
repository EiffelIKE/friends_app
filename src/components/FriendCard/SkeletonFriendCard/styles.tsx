import styled, { css } from 'styled-components';
import { FriendImgContainer, ButtonContainer } from '../styles';
import { skeletonLoading } from '../../../shared/animations';

export const SkeletonImgContainer = styled(FriendImgContainer)`
  ${skeletonLoading({})};
`;

const sharedCss = css`
  height: 1.2rem;
  border-radius: 0.25rem;
  ${skeletonLoading({})};
`;

export const SkeletonText = styled.div`
  width: 100%;
  margin-bottom: 0.5rem;
  ${sharedCss}
`;

export const SkeletonStatus = styled.div`
  width: 80%;
  ${sharedCss};
`;

export const SkeletonButton = styled(ButtonContainer)`
  @media screen and (max-width: 490px) {
    padding: 20px 0;
    border-radius: 0.25rem;
    ${skeletonLoading({})};
  }
`;
