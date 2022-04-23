import { gql } from '@apollo/client';

export const GET_TASKS_BY_TEAM_ID = gql`
  subscription ($team_id: Int!) {
    tasks: tzoer_task(where: { team_id: { _eq: $team_id } }) {
      id
      date
      title
    }
  }
`;

export const DELETE_TASK_BY_ID = gql`
  mutation ($deleted_task_id: Int!) {
    delete_tzoer_task(where: { id: { _eq: $deleted_task_id } }) {
      affected_rows
    }
  }
`;

export const ADD_TASK = gql`
  mutation($objects: [tzoer_task_insert_input!]!) {
      insert_tzoer_task(objects: $objects) {
          affected_rows
      }
  }
`;