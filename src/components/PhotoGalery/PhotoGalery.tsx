/* eslint-disable react/no-array-index-key */
import { FC } from 'react';
import { Img } from '../Img';
import { FriendPhotos, PhotoContainer } from './styles';
import type { PhotoGaleryProps } from './types';

export const PhotoGalery: FC<PhotoGaleryProps> = ({ photos, onClick }) => {
  return (
    <FriendPhotos>
      {photos.map((photo, index) => (
        <PhotoContainer
          key={index}
          onClick={() => onClick(photo, `Friend Photo ${index}`)}
        >
          <Img src={photo} alt={`Friend Photo ${index}`} className="gallery" />
        </PhotoContainer>
      ))}
    </FriendPhotos>
  );
};
