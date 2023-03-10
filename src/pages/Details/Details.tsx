import { FC } from 'react';
import { useGalleryModal, useAppNavigation } from '../../shared/hooks';
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
  const { setPhoto, openModal, renderModal } = useGalleryModal();
  const { detailInfo } = useGetInfo(data);
  const { navigation } = useAppNavigation();

  return (
    <Section>
      <DetailsContainer
        src={data.img}
        firstName={data.first_name}
        lastName={data.last_name}
        active={data.available}
        status={data.statuses[0]}
        tabs={tabs}
        onBack={() => navigation('/')}
        tabsChildren={[
          <DetailInfo key={0} data={detailInfo} />,
          <PhotoGalery
            key={1}
            photos={data.photos}
            onClick={(source, description) => setPhoto(source, description)}
          />,
        ]}
      />
      {openModal && renderModal()}
    </Section>
  );
};
