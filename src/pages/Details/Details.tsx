import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';
import { useGalleryModal } from '../../shared/hooks';
import { useGetInfo } from './hooks';
import {
  Section,
  FriendDetail,
  PhotoGalery,
  DetailInfo,
} from '../../components';
import { tabsDataMock as tabs } from '../../shared/const';
import { BackButton, DetailsContainer } from './styles';

import type { DetailsProps } from './types';

export const Details: FC<DetailsProps> = ({ data }) => {
  const { setPhoto, openModal, renderModal } = useGalleryModal();
  const { detailInfo } = useGetInfo(data);
  const navigate = useNavigate();
  return (
    <Section>
      <DetailsContainer>
        <BackButton
          aria-label="back button"
          variant="secondary"
          className="icon"
          onClick={() => navigate('/')}
        >
          <HiArrowLeft />
        </BackButton>
        <FriendDetail
          src={data.img}
          active={data.available}
          firstName={data.first_name}
          lastName={data.last_name}
          status={data.statuses[0]}
          tabs={tabs}
          tabsChildren={[
            <DetailInfo key={0} data={detailInfo} />,
            <PhotoGalery
              key={1}
              photos={data.photos}
              onClick={(source, description) => setPhoto(source, description)}
            />,
          ]}
        />
      </DetailsContainer>
      {openModal && renderModal()}
    </Section>
  );
};
