/* eslint-disable react/no-array-index-key */
import { FC } from 'react';
import classNames from 'classnames';
import { Text } from '../Text';
import { Data, FriendData, DataRow } from './styles';
import type { DetailInfoProps } from './types';

export const DetailInfo: FC<DetailInfoProps> = ({
  data,
  children,
  containerClassName,
  itemClassName,
}) => {
  return (
    <FriendData className={containerClassName || ''}>
      {data.map((obj, index, array) => {
        return (
          <DataRow key={index}>
            {Object.entries(obj).map((entrie, i, arr) => {
              return (
                <Data
                  key={i}
                  className={classNames(`${itemClassName || ''}`, {
                    column: entrie[1].length < 24,
                    padding: i === arr.length - 1,
                    bordered:
                      i === arr.length - 1 && index !== array.length - 1,
                  })}
                >
                  <Text isGray>{`${entrie[0]}:`}</Text>
                  <Text>{entrie[1]}</Text>
                </Data>
              );
            })}
          </DataRow>
        );
      })}
      {children}
    </FriendData>
  );
};
