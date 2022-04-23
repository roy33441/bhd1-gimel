import { gql } from '@apollo/client';

export const GET_TEAMS_BY_PLUGA = gql`
  query ($pluga_id: Int!) {
    teams: tzoer_team(where: { pluga_id: { _eq: $pluga_id } }) {
      id
      name
    }
  }
`;
