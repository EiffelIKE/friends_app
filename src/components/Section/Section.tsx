import styled from 'styled-components';

export const Section = styled.section`
  display: grid;
  place-content: center;
  width: 100vw;
  height: 100vh;
  @media screen and (max-width: 576px) {
    display: block;
  }
`;
