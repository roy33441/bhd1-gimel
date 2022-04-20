import { gql } from '@apollo/client';

export const GET_SCHEDULE_BY_TEAM = gql`
subscription ($team_id: Int!) {
  teamSchedule: tzoer_schedule(where: {team: {id: {_eq: $team_id}}}) {
      id
      schedule
    }
  }
  
`;