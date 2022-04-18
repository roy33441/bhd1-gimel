export interface Schedule {
    id: number;
    schedule: String;
  }
  
  export interface ScheduleGQL {
    teamSchedule: Schedule[];
  }
  