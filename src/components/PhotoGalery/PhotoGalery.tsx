/* eslint-disable react/no-array-index-key */
import { FC } from 'react';
import { Img } from '../Img';
import { FriendPhotos, PhotoContainer } from './styles';
import type { PhotoGaleryProps } from './types';

export const PhotoGalery: FC<PhotoGaleryProps> = ({ photos, onClick }) => {
  return (
    <FriendPhotos>
      {photos.map((photo, index) => (
        <PhotoContainer key={index} onClick={() => onClick(photo)}>
          <Img src={photo} alt={`Photo ${index}`} />
        </PhotoContainer>
      ))}
    </FriendPhotos>
  );
};
