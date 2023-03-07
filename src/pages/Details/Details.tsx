import styled from 'styled-components';
import { HiArrowLeft } from 'react-icons/hi';
import { createPortal } from 'react-dom';
import {
  Section,
  SectionContainer,
  FriendDetail,
  PhotoGalery,
  DetailInfo,
  Button,
  GalleryModal,
} from '../../components';

import {
  detailsDataMock,
  tabsDataMock,
  photoGaleryMock,
} from '../../shared/const';
import { useGalleryModal } from '../../shared/hooks/useGalleyModal';

const DetailsContainer = styled.div`
  position: relative;
`;

const BackButton = styled(Button)`
  position: absolute;
  left: -120px;
`;

export const Details = () => {
  const { setPhoto, onClose, src, alt } = useGalleryModal();
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
            tabsChildren={[
              <DetailInfo key={0} data={detailsDataMock} />,
              <PhotoGalery
                key={1}
                photos={photoGaleryMock}
                onClick={(source, description) => setPhoto(source, description)}
              />,
            ]}
            firstName="Josh"
            lastName="Charlesasdasdasdasdasdasdasdasdasdasdasdasd"
            status="Building internet stuffs"
          />
        </SectionContainer>
      </DetailsContainer>
      {src &&
        alt &&
        createPortal(
          <GalleryModal alt="alt" src={src} onClose={onClose} />,
          document.getElementById('gallery') as HTMLElement
        )}
    </Section>
  );
};
