import { FC } from 'react';
import { ImgWrapper, StyledImg } from './styles';
import type { ImgProps } from './types';

export const Img: FC<ImgProps> = ({ src, alt, className }) => {
  return (
    <ImgWrapper>
      <StyledImg
        onError={(e) => e.currentTarget.classList.add('d-none')}
        src={src}
        alt={alt && alt}
        className={className && className}
      />
    </ImgWrapper>
  );
};
