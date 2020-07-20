//@ts-check
import { gql } from "apollo-boost";

export const scheduleMutation = gql`
  mutation scheduleMutation($input: ScheduleCreateInput) {
    schedule(input: $input) {
      name
      summary
      rating
      image
    }
  }
`;

export const watchMutation = gql`
  mutation watchMutation($input: WatchedCreateInput) {
    watched(input: $input) {
      name
      summary
      rating
      image
    }
  }
`;

export const updateWatchStatus = gql`
  mutation updateWatchStatus($id: ID!, $data: WatchedUpdateInput!) {
    updateWatchStatus(data: $data, where: { id: $id }) {
      name
      summary
      rating
      image
    }
  }
`;
