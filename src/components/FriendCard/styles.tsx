import styled, { css } from 'styled-components';
import { Col } from 'react-bootstrap';
import { CardContainer } from '../CardContainer';
import { Availability } from '../Availability';
import { fadeIn } from '../../shared/animations';

export const FriendImgContainer = styled.div`
  width: 60px;
  height: 60px;
  position: relative;
  background-color: ${({ theme }) => theme.colors.grayScale.gray70};
  border-radius: 4px;
  @media screen and (max-width: 490px) {
    width: 100%;
    height: 160px;
  }
`;

export const containerStyles = css`
  padding: 14px;
  display: flex;
  gap: 14px;
  @media screen and (max-width: 490px) {
    flex-direction: column;
    padding: 30px;
    gap: 30px;
  }
`;

export const Container = styled(CardContainer)`
  ${containerStyles}
`;

export const FriendCardContainer = styled(CardContainer)`
  ${fadeIn({})}
  ${containerStyles}
`;

export const StyledAviability = styled(Availability)`
  position: absolute;
  top: -3px;
  left: -4px;
`;

export const InfoContainer = styled(Col)`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 4px 0 0 12px;
  overflow: hidden;
  @media screen and (max-width: 769px) {
    margin-left: 0;
    gap: 8px;
  }
`;

export const ButtonContainer = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 10px;
  @media screen and (max-width: 490px) {
    padding: 0;
  }
`;
