import styled from 'styled-components';
import { MdErrorOutline } from 'react-icons/md';

export const WarningIcon = styled(MdErrorOutline)`
  color: ${({ theme }) => theme.colors.active};
  font-size: 40px;
  &.error {
    color: ${({ theme }) => theme.colors.error};
  }
`;

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 100%;
  height: 300px;
`;
