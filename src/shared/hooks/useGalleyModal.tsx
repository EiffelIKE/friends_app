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

  const renderModal = useCallback(() => {
    if (!!alt && !!src) {
      return createPortal(
        <GalleryModal alt={alt} src={src} onClose={onClose} />,
        document.getElementById('gallery') as HTMLElement
      );
    }
    return null;
  }, [alt, src]);

  return { setPhoto, onClose, renderModal };
};
