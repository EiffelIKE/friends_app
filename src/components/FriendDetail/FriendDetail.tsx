import { FC } from 'react';
import {
  DetailsContainer,
  DetailsCol,
  InfoRow,
  ImageContainer,
  StyledAvilable,
  InfoContainer,
} from './styles';
import { Text } from '../Text';
import { SectionContainer } from '../SectionContainer/SectionContainer';
import { Img } from '../Img';
import { Status } from '../Status';
import { TabData } from '../TabData';
import type { FriendsDetailsProps } from './types';

export const FriendDetail: FC<FriendsDetailsProps> = ({
  src,
  firstName,
  lastName,
  active,
  status,
  tabs,
  tabsChildren,
}) => {
  return (
    <SectionContainer>
      <DetailsContainer>
        <DetailsCol>
          <InfoRow>
            <ImageContainer>
              <Img
                src={src}
                alt={`${firstName || ''} ${lastName || ''} Image`}
              />
              <StyledAvilable size="lg" active={active} />
            </ImageContainer>
            <InfoContainer>
              <Text isTitle className="no-wrap">{`${firstName || ''} ${
                lastName || ''
              }`}</Text>
              <Status text={status} />
            </InfoContainer>
          </InfoRow>
          <TabData tabs={tabs} tabChildrens={tabsChildren} />
        </DetailsCol>
      </DetailsContainer>
    </SectionContainer>
  );
};
