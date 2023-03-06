import styled from 'styled-components';
import { HiArrowLeft } from 'react-icons/hi';
import {
  Section,
  SectionContainer,
  FriendDetail,
  PhotoGalery,
  DetailInfo,
  Button,
} from '../../components';

import {
  detailsDataMock,
  tabsDataMock,
  photoGaleryMock,
} from '../../shared/const';

const childrens = [
  <DetailInfo key={0} data={detailsDataMock} />,
  <PhotoGalery
    key={1}
    photos={photoGaleryMock}
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
        <BackButton
          variant="secondary"
          className="icon"
          onClick={() => window.history.back()}
        >
          <HiArrowLeft />
        </BackButton>
        <SectionContainer>
          <FriendDetail
            src="https://reqres.in/img/faces/9-image.jpg"
            active
            tabs={tabsDataMock}
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
