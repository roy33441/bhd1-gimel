import { gql } from '@apollo/client';

export const GET_TESTS = gql`
  query {
    allTests: tzoer_test {
      id
      title
      questions_number
      form_url
    }
  }
`;

export const GET_SCORED_TESTS_BY_PERSONAL_ID = gql`
  query ($tzoer_id: Int!) {
    scoredTests: tzoer_score(where: { tzoer_id: { _eq: $tzoer_id } }) {
      id
      test_id
    }
  }
`;

export const SCORE_TEST = gql`
  mutation ($tzoer_id: Int!, $test_id: Int!) {
    insert_tzoer_score_one(object: { tzoer_id: $tzoer_id, test_id: $test_id }) {
      id
    }
  }
`;

export const NEW_TEST = gql`
  mutation ($tzoer_id: Int!, $test_id: Int!) {
    delete_tzoer_score(where: { test_id: { _eq: $test_id }, tzoer_id: { _eq: $tzoer_id } }) {
      affected_rows
    }
  }
`;
