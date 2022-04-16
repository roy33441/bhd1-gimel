import { gql } from '@apollo/client';

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
