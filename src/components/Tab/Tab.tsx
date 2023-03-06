/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { FC } from 'react';
import classNames from 'classnames';
import type { TabProps } from './types';

import './styles.scss';

export const Tab: FC<TabProps> = ({ active, className, onClick, children }) => {
  return (
    <div
      onClick={onClick}
      className={classNames(`tab ${className || ''}`, {
        active,
      })}
    >
      {children}
    </div>
  );
};
