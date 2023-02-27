import styled from 'styled-components';

export const StatusContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.grayScale.gray70};
  border-radius: 20px;
  width: fit-content;
  max-width: 100%;
  height: 24px;
  padding: 0 8px;
  color: ${({ theme }) => theme.colors.grayScale.gray70};
  font-weight: 500;
  font-size: 12px;
  line-height: 22px;
  & p {
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
