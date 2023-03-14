import styled from 'styled-components';

export const FriendData = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2.68vh;
  @media screen and (max-width: 608px) {
    padding: 0 calc(28 / 608 * 100vw);
  }
`;

export const Data = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: capitalize;
  gap: 1.2vh;
  &.column {
    display: grid;
    grid-template-columns: 1.25fr 1fr;
    &:not(:last-child) {
      margin-bottom: 1.2vh;
    }
    @media screen and (max-width: 460px) {
      grid-template-columns: 1fr;
    }
  }
  &.bordered {
    border-bottom: 1px solid ${({ theme }) => theme.colors.grayScale.gray75};
  }
  &.padding {
    padding-bottom: 2.68vh;

    @media screen and (max-width: 608px) {
      padding-bottom: calc(28 / 608 * 100vw);
    }
  }
  & > .info-text {
    font-weight: 400;
  }
`;

export const DataRow = styled.div`
  padding-top: 2.8vh;

  @media screen and (max-width: 608px) {
    padding: calc(28 / 608 * 100vw);
  }
`;
