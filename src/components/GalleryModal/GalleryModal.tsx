import { IoClose } from 'react-icons/io5';
import { FC } from 'react';
import { ModalContainer } from '../ModalContainer';
import { CloseButton, ImageContainer } from './styles';
import { Img } from '../Img';
import type { GalleryModalProps } from './types';

export const GalleryModal: FC<GalleryModalProps> = ({ src, alt, onClose }) => {
  return (
    <ModalContainer>
      <CloseButton
        aria-label="close button"
        variant="dark"
        className="icon"
        onClick={() => onClose()}
      >
        <IoClose />
      </CloseButton>
      <ImageContainer>
        <Img src={src} alt={`${alt} open`} />
      </ImageContainer>
    </ModalContainer>
  );
};
