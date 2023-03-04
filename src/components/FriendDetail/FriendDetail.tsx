import { useState } from 'react';
import {
  DetailsContainer,
  DetailsCol,
  InfoRow,
  ImageContainer,
  StyledAvilable,
  InfoContainer,
} from './styles';
import { Text } from '../Text';
import { Img } from '../Img';
import { Status } from '../Status';
import { TabData } from '../TabData';
import { DetailInfo } from '../DetailInfo/DetailInfo';
import { PhotoGalery } from '../PhotoGalery/PhotoGalery';

const childrens = [
  <DetailInfo
    key={0}
    data={[
      {
        Bio: "I'm very choosy. I'm also very suspicious, very irrational and I have a very short temper. I'm also extremely jealous and slow to forgive. Just so you know.",
      },
      {
        phone: '(820) 289-1818',
      },
      {
        Address: '5190 Center Court Drive',
        City: 'Spring',
        State: 'TX',
        ZipCode: '77370',
      },
    ]}
  />,
  <PhotoGalery
    key={1}
    photos={[
      'https://reqres.in/img/faces/7-image.jpg',
      'https://reqres.in/img/faces/8-image.jpg',
      'https://reqres.in/img/faces/9-image.jpg',
      'https://reqres.in/img/faces/10-image.jpg',
      'https://reqres.in/img/faces/11-image.jpg',
      'https://reqres.in/img/faces/12-image.jpg',
      'https://reqres.in/img/faces/6-image.jpg',
    ]}
    onClick={(src) => console.log(src)}
  />,
];

export const FriendDetail = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleClick = (id: number) => {
    setActiveTab(id);
  };

  return (
    <DetailsContainer>
      <DetailsCol>
        <InfoRow>
          <ImageContainer>
            <Img src="https://reqres.in/img/faces/10-image.jpg" />
            <StyledAvilable size="lg" active />
          </ImageContainer>
          <InfoContainer>
            <Text isTitle>Friend Name</Text>
            <Status text="Friend Status" />
          </InfoContainer>
        </InfoRow>
        <TabData
          tabs={[
            {
              id: 0,
              title: 'Info',
            },
            {
              id: 1,
              title: 'Photos',
            },
          ]}
          activeTab={activeTab}
          onClick={handleClick}
        >
          {childrens[activeTab]}
        </TabData>
      </DetailsCol>
    </DetailsContainer>
  );
};
