import React, { MouseEventHandler } from 'react';

export interface TabProps {
  active: boolean;
  children: React.ReactNode;
  className?: string;
  onClick: MouseEventHandler;
}
