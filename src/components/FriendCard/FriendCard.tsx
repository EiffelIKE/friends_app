import { FC } from 'react';
import { Col } from 'react-bootstrap';
import { Status } from '../Status';
import { Img } from '../Img';
import { Button } from '../Button';
import { Text } from '../Text';
import {
  FriendImgContainer,
  StyledAviability,
  ButtonContainer,
  InfoContainer,
  FriendCardContainer,
} from './styles';
import type { FriendCardProps } from './types';

export const FriendCard: FC<FriendCardProps> = ({
  active,
  src,
  id,
  firstName,
  lastName,
  text,
  disabled,
  onClick,
}) => {
  const fullName = `${firstName || ''} ${lastName || ''}`;

  return (
    <FriendCardContainer>
      <Col md="1">
        <FriendImgContainer>
          <StyledAviability active={active} />
          {src && <Img src={src} alt={`Friend ${id} image`} />}
        </FriendImgContainer>
      </Col>
      <InfoContainer xs="6" md="8">
        <Text className="no-wrap">{`${
          fullName.length > 1 ? fullName : 'Unknow'
        }`}</Text>
        <Status text={text} />
      </InfoContainer>
      <ButtonContainer>
        <Button
          disabled={disabled}
          variant="main"
          onClick={() => onClick && onClick(id)}
        >
          Details
        </Button>
      </ButtonContainer>
    </FriendCardContainer>
  );
};
