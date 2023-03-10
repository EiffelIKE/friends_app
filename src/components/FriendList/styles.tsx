import styled from 'styled-components';

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
  @media screen and (max-width: 490px) {
    gap: 30px;
  }
`;
