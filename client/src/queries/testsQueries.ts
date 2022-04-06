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
  {
    scoredTests: tzoer_score(where: { tzoer: { personal_id: { _eq: "322298746" } } }) {
      id
      test_id
    }
  }
`;
