import { gql } from '@apollo/client';
import { MANAGER_ROLE_ID, SEGEL_ROLE_ID } from 'common/constants';

export const LOGIN_TZOER = gql`
  query ($personal_id: String!, $password: String!) {
    tzoer: tzoer_tzoer(
      where: { personal_id: { _eq: $personal_id }, password: { _eq: $password } }
    ) {
      id
      first_name
      last_name
      personal_id
      role {
        id
        name
      }
      team {
        id
        name
        pluga {
          id
          name
        }
      }
    }
  }
`;

export const GET_TZOERS_BY_TEAM = gql`
  query ($team_id: Int!) {
    tzoersTeam: tzoer_tzoer(
      where: { team_id: { _eq: $team_id }, role_id: { _nin: [${SEGEL_ROLE_ID}, ${MANAGER_ROLE_ID}] } }
    ) {
      id
      first_name
      last_name
    }
  }
`;

export const GET_TZOERS_BY_PLUGA = gql`
  query ($pluga_id: Int!) {
    plugaTzoers: tzoer_tzoer(
      where: { team: { pluga_id: { _eq: $pluga_id } }, role_id: { _nin: [${SEGEL_ROLE_ID}, ${MANAGER_ROLE_ID}] } }
    ) {
      id
      first_name
      last_name
      team_id
    }
  }
`;
