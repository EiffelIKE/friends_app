import { FC } from 'react';
import classNames from 'classnames';
import type { TabProps } from './types';

import './styles.scss';

export const Tab: FC<TabProps> = ({ active, className, children }) => {
  return (
    <div
      className={classNames(`tab ${className && className}`, {
        active,
      })}
    >
      {children}
    </div>
  );
};
