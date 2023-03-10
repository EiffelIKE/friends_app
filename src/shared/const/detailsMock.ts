import { photoGaleryMock } from './photoGaleryMock';
import type { DetailsData } from '../types';

export const detailsMock: DetailsData = {
  id: 6,
  img: photoGaleryMock[2],
  first_name: 'Joshep',
  last_name: 'Charles',
  statuses: ['Developing something amazing', 'On the beach'],
  available: true,
  phone: '(820) 289-1818',
  address_1: '5190 Center Court Drive',
  city: 'Spring',
  state: 'TX',
  zipcode: '77370',
  photos: photoGaleryMock,
  bio: "I'm very choosy. I'm also very suspicious, very irrational and I have a very short temper. I'm also extremely jealous and slow to forgive. Just so you know.",
};
