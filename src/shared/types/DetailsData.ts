export interface DetailsData {
  id: number;
  img: string;
  first_name: string;
  last_name: string;
  statuses: Array<string>;
  available: boolean;
  phone: string;
  address_1: string;
  city: string;
  state: string;
  zipcode: string;
  bio: string;
  photos: Array<string>;
}
