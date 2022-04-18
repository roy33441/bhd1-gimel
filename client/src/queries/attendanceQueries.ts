import { gql } from '@apollo/client';

export const GET_ATTENDANCE_BY_TEAM = gql`
  query ($team_id: Int!) {
    attendance: tzoer_attendance(where: { tzoer: { team_id: { _eq: $team_id } } }) {
      id
      tzoer_id
      is_present
      missing_reason
    }
  }
`;

export const UPSERT_ATTENDANCE = gql`
  mutation ($objects: [tzoer_attendance_insert_input!]!) {
    insert_tzoer_attendance(
      objects: $objects
      on_conflict: {
        constraint: attendance_tzoer_id_key
        update_columns: [is_present, missing_reason]
      }
    ) {
      affected_rows
    }
  }
`;

export const DELETE_TZOERS_BY_IDS = gql`
  mutation ($deleted_tzoers_ids: [Int!]!) {
    delete_tzoer_attendance(where: { tzoer_id: { _in: $deleted_tzoers_ids } }) {
      affected_rows
    }
  }
`;

export const DELETE_ALL_ATTENDANCE_BY_TEAM = gql`
  mutation ($team_id: Int!) {
    delete_tzoer_attendance(where: { tzoer: { team_id: { _eq: $team_id } } }) {
      affected_rows
    }
  }
`;
