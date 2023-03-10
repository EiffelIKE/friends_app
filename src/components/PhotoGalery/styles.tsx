import styled from 'styled-components';

export const PhotoContainer = styled.div`
  width: 13.28vh;
  height: 13.28vh;
  cursor: pointer;

  &:active {
    opacity: 0.5;
  }
  @media screen and (max-width: 608px) {
    width: calc(136 / 608 * 100vw);
    height: calc(136 / 608 * 100vw);
  }
`;

export const FriendPhotos = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.9vh;
  padding: 1.9vh;
  width: 100%;
  @media screen and (max-width: 608px) {
    padding: calc(20 / 608 * 100vw);
    gap: calc(20 / 608 * 100vw);
  }
`;
