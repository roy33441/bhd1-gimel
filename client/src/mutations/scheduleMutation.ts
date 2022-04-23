import { gql } from '@apollo/client';

export const UPDATE_SCHEDULE = gql`
mutation($objects: [tzoer_schedule_insert_input!]!) {
    insert_tzoer_schedule(
      objects: $objects, 
      on_conflict: {
        constraint: schedule_team_id_key, 
        update_columns: [schedule]
      }
      ) {
      affected_rows
    }
  }
`;
