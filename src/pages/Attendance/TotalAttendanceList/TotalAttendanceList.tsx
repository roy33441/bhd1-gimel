import { useQuery } from '@apollo/client';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import auth from 'common/auth';
import { GET_ATTENDANCET_TZOERS_BY_PLUGA } from 'queries/attendanceQueries';
import { Dispatch, FC, SetStateAction } from 'react';
import { Attendance, TotalAttendance } from 'types/attendance';
import { Tzoer } from 'types/tzoer';
import MissingList from '../MissingList/MissingList';
import PresentList from '../PresentList/PresentList';
import { useStyles } from '../AttendanceStyles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import { GET_TZOERS_AGGREGATE_BY_PLUGA } from 'queries/tzoerQueries';
import TotalStatus from './TotalStatus/TotalStatus';
import { Team } from 'types/team';

interface TotalAttendanceListProps {
  onRemoveItem: Dispatch<SetStateAction<Attendance[]>>;
  isEditingReport: boolean;
  changeSelectedTeam: Dispatch<SetStateAction<number>>;
  selectedTeamId: number;
  teams: Team[];
}

type AttendanceTzoer = { missing_reason?: string } & Pick<Tzoer, 'id' | 'first_name' | 'last_name'>;

const TotalAttendanceList: FC<TotalAttendanceListProps> = props => {
  const { onRemoveItem, isEditingReport, changeSelectedTeam, selectedTeamId, teams } = props;
  const classes = useStyles();

  const loggedTzoer: Tzoer = auth.getLoggedTzoer();

  const { data: attendance, loading: loadingAttendance } = useQuery<
    { attendance: TotalAttendance[] },
    { pluga_id: number }
  >(GET_ATTENDANCET_TZOERS_BY_PLUGA, {
    variables: {
      pluga_id: loggedTzoer.pluga.id
    },
    fetchPolicy: 'no-cache'
  });

  const { data: totalTzoersAggregate, loading: loadingTzoersAggregate } = useQuery<
    {
      plugaTzoersAggregate: { aggregate: { count: number } };
    },
    {
      pluga_id: number;
    }
  >(GET_TZOERS_AGGREGATE_BY_PLUGA, {
    variables: {
      pluga_id: loggedTzoer.pluga.id
    },
    fetchPolicy: 'no-cache'
  });

  if (loadingAttendance || loadingTzoersAggregate) {
    return (
      <div className={classes.loaderOrErrorContainer}>
        <CircularProgress size={80} color='primary' />
      </div>
    );
  }

  if (!attendance || !totalTzoersAggregate) {
    return (
      <div className={classes.loaderOrErrorContainer}>
        <Typography>שגיאה בטעינת המצ"ל</Typography>
      </div>
    );
  }

  const attendanceList: Attendance[] = attendance.attendance.map(
    ({ id, is_present, missing_reason, tzoer: { id: tzoer_id } }) => ({
      id,
      is_present,
      missing_reason,
      tzoer_id
    })
  );

  const presentList: AttendanceTzoer[] = attendance.attendance
    .filter(tzoer => tzoer.is_present)
    .map(({ tzoer: { id, first_name, last_name } }) => ({ id, first_name, last_name }));

  const missingList: AttendanceTzoer[] = attendance.attendance
    .filter(tzoer => !tzoer.is_present)
    .map(({ tzoer: { id, first_name, last_name }, missing_reason }) => ({
      id,
      first_name,
      last_name,
      missing_reason
    }));

  return (
    <>
      <TotalStatus
        present={presentList.length}
        missing={missingList.length}
        total={totalTzoersAggregate.plugaTzoersAggregate.aggregate.count}
        changeSelectedTeam={changeSelectedTeam}
        selectedTeamId={selectedTeamId}
        teams={teams}
      />
      <Paper elevation={0} className={classes.mainContent}>
        <PresentList
          onRemoveItem={onRemoveItem}
          list={presentList}
          isEditingReport={isEditingReport}
        />
        <Divider className={classes.divider} />
        <MissingList
          attendanceList={attendanceList}
          onRemoveItem={onRemoveItem}
          list={missingList}
          isEditingReport={isEditingReport}
        />
      </Paper>
    </>
  );
};

export default TotalAttendanceList;
