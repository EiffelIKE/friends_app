import styled from 'styled-components';
import { Row } from 'react-bootstrap';

export const StyledRow = styled(Row)`
  overflow-y: auto;
  scrollbar-width: none;
  scrollbar-color: ${({ theme }) =>
    `${theme.colors.grayScale.gray70} ${theme.colors.scroll}`};
  scrollbar-width: thin;
  ::-webkit-scrollbar {
    width: 5px;
    background: ${({ theme }) => theme.colors.scroll};
    opacity: 0.3;
    border-radius: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.grayScale.gray70};
    border-radius: 8px;
  }
`;
