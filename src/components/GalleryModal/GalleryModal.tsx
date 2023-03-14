import { FC } from 'react';
import { ModalContainer } from '../ModalContainer';
import { StyledCloseButton, ImageContainer } from './styles';
import { Img } from '../Img';
import type { GalleryModalProps } from './types';

export const GalleryModal: FC<GalleryModalProps> = ({ src, alt, onClose }) => {
  return (
    <ModalContainer>
      <StyledCloseButton onClose={onClose} />
      <ImageContainer>
        <Img src={src} alt={`${alt} open`} />
      </ImageContainer>
    </ModalContainer>
  );
};
