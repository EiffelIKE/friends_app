import type { DetailsData } from '../types';

type GetInfo = DetailsData | Record<string, never>;

export const getInfoDetails = (data: GetInfo) => {
  const ans = [];
  if (Object.keys(data).length > 0) {
    ans.push(
      {
        bio: data.bio,
      },
      {
        phone: data.phone,
      },
      {
        address: data.address_1,
        city: data.city,
        state: data.state,
        zipCode: data.zipcode,
      }
    );
  }
  return ans;
};
