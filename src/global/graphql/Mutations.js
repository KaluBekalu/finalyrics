import gql from "graphql-tag";

export const updateTrack = gql`
  mutation updateTrack($_id: uuid, $body: String) {
    update_tracks(where: { id: { _eq: $_id } }, _set: { body: $body }) {
      affected_rows
    }
  }
`;
