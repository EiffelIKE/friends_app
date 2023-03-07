import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: #373e5ae5;
  top: 0;
  left: 0;
  z-index: 3;
  display: grid;
  place-content: center;
  padding: 60px;
  @media screen and (max-width: 578px) {
    padding: 40px;
  }
`;
