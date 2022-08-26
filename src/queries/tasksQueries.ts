import { gql } from '@apollo/client';

export const GET_TASKS_BY_TEAM = gql`
  subscription ($team_id: Int!) {
    tasks: tzoer_task(where: { team_id: { _eq: $team_id } }) {
      id
      description
      deadline
    }
  }
`;

export const GET_FINISH_TASKS_BY_TZOER = gql`
  query ($tzoer_id: Int!) {
    finish_tasks: tzoer_finish_task(where: { tzoer_id: { _eq: $tzoer_id } }) {
      id
      task_id
    }
  }
`;

export const CHECK_TASK = gql`
  mutation ($task_id: Int!, $tzoer_id: Int!) {
    insert_tzoer_finish_task_one(object: { task_id: $task_id, tzoer_id: $tzoer_id }) {
      id
    }
  }
`;

export const UNCHECKED_TASK = gql`
  mutation ($task_id: Int!, $tzoer_id: Int!) {
    delete_tzoer_finish_task(where: { task_id: { _eq: $task_id }, tzoer_id: { _eq: $tzoer_id } }) {
      affected_rows
    }
  }
`;

export const DELETE_TASK = gql`
  mutation ($task_id: Int!) {
    delete_tzoer_task(where: { id: { _eq: $task_id } }) {
      affected_rows
    }
  }
`;

export const ADD_TASK = gql`
  mutation ($object: tzoer_task_insert_input!) {
    insert_tzoer_task_one(object: $object) {
      id
    }
  }
`;
