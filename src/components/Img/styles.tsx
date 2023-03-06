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
`;
