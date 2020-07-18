//@ts-check
import * as jwt from "jsonwebtoken";

export const APP_SECRET = "qwern-latadasha";
export const BASE_URL = "http://api.tvmaze.com";

export const pagination = ({
  after: cursor,
  pageSize,
  results,
  getCursor = () => null,
}) => {
  if (pageSize < 1) return [];

  if (!cursor) return results.slice(0, pageSize);
  const cursorIndex = results.findIndex((item) => {
    let itemCursor = item.cursor ? item.cursor : getCursor(item);

    return itemCursor ? cursor === itemCursor : false;
  });

  return cursorIndex >= 0
    ? cursorIndex === results.length - 1
      ? []
      : results.slice(
          cursorIndex + 1,
          Math.min(results.length, cursorIndex + 1 + pageSize)
        )
    : results.slice(0, pageSize);
};

export const WatchFragment = /* GraphQL */ `
  fragment WatchedWithDetails on Watched {
    name
    id
    summary
    url
    image
    rating
    user {
      id
      name
      email
    }
    favorite
    comment
  }
`;

export const ScheduleFragment = /* GraphQL */ `
  fragment ScheduleWithDetails on Schedule {
    name
    id
    summary
    url
    image
    rating
    user {
      id
      name
      email
    }
  }
`;
