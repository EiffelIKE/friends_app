import styled from 'styled-components';

export const ImgWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.grayScale.gray70};
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1);
  transition: transform 0.4s;
  &.gallery:hover {
    transform: scale(1.06);
    transition: transform 0.4s;
  }
  &.aspect-ratio {
    &__4x3 {
      aspect-ratio: 4/3;
    }
  }
`;
