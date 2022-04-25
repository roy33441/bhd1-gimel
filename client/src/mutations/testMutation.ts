import { gql } from '@apollo/client';

export const ADD_TEST = gql`
mutation ($objects: [tzoer_test_insert_input!]!) {
    insert_tzoer_test(objects: $objects){
      affected_rows
    }
  }
  
`;
