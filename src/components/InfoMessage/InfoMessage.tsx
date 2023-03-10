import { FC } from 'react';
import classNames from 'classnames';
import { Text } from '../Text';
import { MessageContainer, WarningIcon } from './styles';
import type { ErrorMessageProps } from './types';

export const InfoMessage: FC<ErrorMessageProps> = ({ info, error }) => {
  return (
    <MessageContainer>
      <WarningIcon className={classNames({ error })} />
      <Text>{info}</Text>
    </MessageContainer>
  );
};
