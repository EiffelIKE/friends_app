import { useState } from 'react';

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

  return { setPhoto, onClose, src, alt };
};
