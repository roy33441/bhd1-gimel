export interface Attendance {
  id?: number;
  tzoer_id: number;
  is_present: boolean;
  missing_reason?: string;
}

export interface AttendanceGQL {
  attendance: Attendance[];
}

export interface PreviewAttendance {
  id: number;
  tzoer: {
    team_id: number;
  };
  is_present: boolean;
}

export interface TotalAttendance {
  id: number;
  tzoer: {
    id: number;
    first_name: string;
    last_name: string;
  };
  is_present: boolean;
  missing_reason?: string;
}
