import { gql } from '@apollo/client';
import { MANAGER_ROLE_ID } from 'common/constants';

export const ADD_TZOER = gql`
  mutation ($objects: [tzoer_tzoer_insert_input!]!) {
    insert_tzoer_tzoer(
      objects: $objects
      on_conflict: {
        constraint: tzoer_personal_number_key
        update_columns: [first_name, last_name, role_id, team_id, password]
      }
    ) {
      affected_rows
    }
  }
`;

export const DELETE_ALL_TZOERS = gql`
  mutation {
    delete_tzoer_tzoer(where: { role_id: { _neq: ${MANAGER_ROLE_ID} } }) {
      affected_rows
    }
  }
`;
