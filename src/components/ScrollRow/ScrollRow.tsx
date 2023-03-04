import { RowProps, Row } from 'react-bootstrap';
import styled from 'styled-components';

export const ScrollRow = styled(Row)<RowProps>`
  overflow: overlay;
  scrollbar-width: none;
  scrollbar-color: ${({ theme }) =>
    `${theme.colors.grayScale.gray70} ${theme.colors.scroll}`};
  scrollbar-width: thin;
  ::-webkit-scrollbar {
    width: 5px;
    background: ${({ theme }) => theme.colors.scroll};
    opacity: 0.3;
    border-radius: 8px;
    margin-left: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.grayScale.gray70};
    border-radius: 8px;
  }
`;
