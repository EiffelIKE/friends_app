import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGalleryModal } from '../../shared/hooks';
import { useGetInfo } from './hooks';
import {
  Section,
  PhotoGalery,
  DetailInfo,
  DetailsContainer,
} from '../../components';
import { tabsDataMock as tabs } from '../../shared/const';

import type { DetailsProps } from './types';

export const Details: FC<DetailsProps> = ({ data }) => {
  const { setPhoto, renderModal } = useGalleryModal();
  const { detailInfo } = useGetInfo(data);
  const navigate = useNavigate();

  return (
    <Section>
      <DetailsContainer
        src={data.img}
        firstName={data.first_name}
        lastName={data.last_name}
        active={data.available}
        status={data.statuses[0]}
        tabs={tabs}
        onBack={() => navigate('/')}
        tabsChildren={[
          <DetailInfo key={0} data={detailInfo} />,
          <PhotoGalery
            key={1}
            photos={data.photos}
            onClick={(source, description) => setPhoto(source, description)}
          />,
        ]}
      />
      {renderModal()}
    </Section>
  );
};
