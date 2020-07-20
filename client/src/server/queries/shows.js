//@ts-check
import { gql } from "apollo-boost";

export const showsQuery = gql`
  query showsQuery($pageSize: Int!, $after: String!) {
    shows(pageSize: $pageSize, after: $after) {
      name
      rating
      image
      summary
    }
  }
`;

export const scheduleQuery = gql`
  query scheduleQuery {
    schedule {
      id
      name
      rating
      image
      summary
    }
  }
`;

export const watchQuery = gql`
  query watchQuery {
    watchList {
      id
      name
      rating
      image
      summary
    }
  }
`;

export const favoriteQuery = gql`
  query favoriteQuery {
    favorite {
      id
      name
      rating
      image
      summary
    }
  }
`;
