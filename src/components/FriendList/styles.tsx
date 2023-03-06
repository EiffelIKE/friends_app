import styled from 'styled-components';
import { MdErrorOutline } from 'react-icons/md';

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
  @media screen and (max-width: 490px) {
    gap: 30px;
  }
`;

export const WarningIcon = styled(MdErrorOutline)`
  color: ${({ theme }) => theme.colors.error};
  font-size: 40px;
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
