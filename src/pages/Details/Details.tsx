import styled from 'styled-components';
import {
  Section,
  SectionContainer,
  FriendDetail,
  PhotoGalery,
  DetailInfo,
  Button,
} from '../../components';

const tabs = [
  {
    id: 0,
    title: 'Info',
  },
  {
    id: 1,
    title: 'Photos',
  },
];

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

const DetailsContainer = styled.div`
  position: relative;
`;

const BackButton = styled(Button)`
  position: absolute;
  left: -120px;
`;

export const Details = () => {
  return (
    <Section>
      <DetailsContainer>
        <BackButton variant="secondary" onClick={() => window.history.back()}>
          B
        </BackButton>
        <SectionContainer>
          <FriendDetail
            src="https://reqres.in/img/faces/9-image.jpg"
            active
            tabs={tabs}
            tabsChildren={childrens}
            firstName="Josh"
            lastName="Charlesasdasdasdasdasdasdasdasdasdasdasdasd"
            status="Building internet stuffs"
          />
        </SectionContainer>
      </DetailsContainer>
    </Section>
  );
};
