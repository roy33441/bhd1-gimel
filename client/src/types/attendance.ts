export interface Attendance {
  id?: number;
  tzoer_id: number;
  is_present: boolean;
  missing_reason?: string;
}

export interface AttendanceGQL {
  attendance: Attendance[];
}
