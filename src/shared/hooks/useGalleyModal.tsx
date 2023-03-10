import { useCallback, useState } from 'react';
import { createPortal } from 'react-dom';
import { GalleryModal } from '../../components';

export const useGalleryModal = () => {
  const [src, setSrc] = useState<string>('');
  const [alt, setAlt] = useState<string>('');

  const setPhoto = (source: string, description: string) => {
    setSrc(source);
    setAlt(description);
  };

  const onClose = () => {
    setAlt('');
    setSrc('');
  };

  const renderModal = useCallback(
    () =>
      createPortal(
        <GalleryModal alt={alt} src={src} onClose={onClose} />,
        document.getElementById('gallery') as HTMLElement
      ),
    [alt, src]
  );

  const openModal = !!alt && !!src;

  return { setPhoto, onClose, openModal, renderModal };
};
