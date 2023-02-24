import { FC } from 'react';
import classNames from 'classnames';

import type { TextProps } from './types';
import './styles.scss';

export const Text: FC<TextProps> = ({
  isTitle,
  className,
  isGray,
  children,
}) => {
  return isTitle ? (
    <h1 className={classNames(`text title ${className}`, { gray: isGray })}>
      {children}
    </h1>
  ) : (
    <p className={classNames(`text ${className}`, { gray: isGray })}>
      {children}
    </p>
  );
};
