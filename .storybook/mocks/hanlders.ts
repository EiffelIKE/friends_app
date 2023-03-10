import { rest } from 'msw';
import { friendListMock, detailsMock } from '../../src/shared/const';

type url = 'friends' | 'friends/id';

type GetType = {
  url: url;
  loading?: boolean;
  empty?: boolean;
  error?: boolean;
};

const responses = (url: url) => {
  switch (url) {
    case 'friends':
      return friendListMock;
    case 'friends/id':
      return detailsMock;
    default:
      return [];
  }
};

export const getMock = ({
  url,
  loading = false,
  empty = false,
  error = false,
}: GetType) =>
  rest.get(url, (req, res, ctx) => {
    if (loading) return res(ctx.delay('infinite'));
    if (empty) return res(ctx.json([]));
    if (error) return res(ctx.status(400));
    return res(ctx.json(responses(url)));
  });
