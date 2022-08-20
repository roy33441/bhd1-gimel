import { FC, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import SaveIcon from '@material-ui/icons/Save';
import CreateIcon from '@material-ui/icons/Create';
import Divider from '@material-ui/core/Divider';
import { useQuery } from '@apollo/client/react/hooks/useQuery';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

import { useStyles } from './AttendanceStyles';
import Status from 'pages/Attendance/Status/Status';
import NotReportedList from 'pages/Attendance/NotReportedList/NotReportedList';
import PresentList from 'pages/Attendance/PresentList/PresentList';
import MissingList from 'pages/Attendance/MissingList/MissingList';
import { Team, TeamGQL } from 'types/team';
import { GET_TEAMS_BY_PLUGA } from 'queries/teamsQueries';
import auth from 'common/auth';
import { Tzoer, TzoersTeamGQL } from 'types/tzoer';
import { Attendance, AttendanceGQL } from 'types/attendance';
import {
  DELETE_ALL_ATTENDANCE_BY_TEAM,
  DELETE_TZOERS_BY_IDS,
  GET_ATTENDANCE_BY_TEAM,
  UPSERT_ATTENDANCE
} from 'queries/attendanceQueries';
import { GET_TZOERS_BY_TEAM } from 'queries/tzoerQueries';
import { useMutation } from '@apollo/client';
import TotalAttendanceList from './TotalAttendanceList/TotalAttendanceList';

type AttendanceTzoer = Pick<Tzoer, 'id' | 'first_name' | 'last_name'>;

type AffectedRowsGQL = {
  insert_tzoer_attendance: {
    affected_rows: number;
  };
};

const PLUGA_ID = -1;

const AttendancePage: FC = (): JSX.Element => {
  const [isEditingReport, setIsEditingReport] = useState<boolean>(false);
  const [modifiedAttendance, setModifiedAttendance] = useState<Attendance[]>([]);
  const classes = useStyles({ isEditingReport });

  const loggedTzoer: Tzoer = auth.getLoggedTzoer();
  const [selectedTeamId, setSelectedTeamId] = useState<number>(loggedTzoer.team.id);

  const { data: teams, loading: loadingTeams } = useQuery<TeamGQL, { pluga_id: number }>(
    GET_TEAMS_BY_PLUGA,
    {
      variables: {
        pluga_id: loggedTzoer.pluga.id
      }
    }
  );

  const { data: tzoersTeam, loading: loadingTzoersTeam } = useQuery<
    TzoersTeamGQL,
    { team_id: number }
  >(GET_TZOERS_BY_TEAM, {
    variables: {
      team_id: selectedTeamId
    }
  });

  const { data: attendance, loading: loadingAttendance } = useQuery<
    AttendanceGQL,
    { team_id: number }
  >(GET_ATTENDANCE_BY_TEAM, {
    variables: {
      team_id: selectedTeamId
    },
    fetchPolicy: 'no-cache',
    onCompleted: data => setModifiedAttendance(data.attendance)
  });

  const [clearAttendance, { loading: clearAttendanceLoading }] = useMutation<
    AffectedRowsGQL,
    { team_id: number }
  >(DELETE_ALL_ATTENDANCE_BY_TEAM, {
    onCompleted: () => setModifiedAttendance([])
  });

  const [updateAttendance, { loading: updateAttendanceLoading }] = useMutation<
    AffectedRowsGQL,
    { objects: Attendance[] }
  >(UPSERT_ATTENDANCE);

  const [removeNonReportedTzoers, { loading: removeNonReportedTzoersLoading }] = useMutation<
    AffectedRowsGQL,
    { deleted_tzoers_ids: number[] }
  >(DELETE_TZOERS_BY_IDS, {
    onCompleted: () => updateAttendance({ variables: { objects: modifiedAttendance } })
  });

  if (
    clearAttendanceLoading ||
    loadingTeams ||
    loadingTzoersTeam ||
    loadingAttendance ||
    updateAttendanceLoading ||
    removeNonReportedTzoersLoading
  ) {
    return (
      <div className={classes.loaderOrErrorContainer}>
        <CircularProgress size={80} color='primary' />
      </div>
    );
  }

  if (!teams || !attendance || !tzoersTeam) {
    return (
      <div className={classes.loaderOrErrorContainer}>
        <Typography>שגיאה בטעינת המצ"ל</Typography>
      </div>
    );
  }

  const dropdownTeams: Team[] = [{ id: PLUGA_ID, name: loggedTzoer.pluga.name }, ...teams.teams];

  const notReportedTzoers: AttendanceTzoer[] = tzoersTeam.tzoersTeam.filter(
    tzoer => !modifiedAttendance.find(tzoerAttendance => tzoerAttendance.tzoer_id === tzoer.id)
  );

  const presentTzoers: AttendanceTzoer[] = tzoersTeam.tzoersTeam.filter(tzoer =>
    modifiedAttendance
      .filter(({ is_present }) => is_present)
      .find(tzoerAttendance => tzoerAttendance.tzoer_id === tzoer.id)
  );

  const missingTzoers: AttendanceTzoer[] = tzoersTeam.tzoersTeam.filter(tzoer =>
    modifiedAttendance
      .filter(({ is_present }) => !is_present)
      .find(tzoerAttendance => tzoerAttendance.tzoer_id === tzoer.id)
  );

  const deleted_tzoers_ids: number[] = attendance.attendance
    .filter(
      prevTzoer => !modifiedAttendance.find(newTzoer => prevTzoer.tzoer_id === newTzoer.tzoer_id)
    )
    .map(({ tzoer_id }) => tzoer_id);

  const saveReportChip: JSX.Element = (
    <Chip
      className={classes.saveReportChip}
      onClick={() => {
        removeNonReportedTzoers({ variables: { deleted_tzoers_ids } });
        setIsEditingReport(false);
      }}
      icon={<SaveIcon />}
      size='small'
      color='secondary'
      label='שמור דיווח'
    />
  );

  const enterEditReportChip: JSX.Element = (
    <Chip
      className={classes.editReportChip}
      onClick={() => setIsEditingReport(true)}
      icon={<CreateIcon style={{ color: 'white' }} />}
      size='small'
      label='ערוך דיווח'
    />
  );

  return (
    <div className={classes.container}>
      {selectedTeamId === PLUGA_ID ? (
        <>
          <TotalAttendanceList
            onRemoveItem={setModifiedAttendance}
            isEditingReport={isEditingReport}
            changeSelectedTeam={setSelectedTeamId}
            selectedTeamId={selectedTeamId}
            teams={dropdownTeams}
          />
        </>
      ) : (
        <>
          <Status
            onClearAttendance={() => clearAttendance({ variables: { team_id: selectedTeamId } })}
            present={presentTzoers.length}
            missing={missingTzoers.length}
            total={tzoersTeam.tzoersTeam.length}
            changeSelectedTeam={setSelectedTeamId}
            selectedTeamId={selectedTeamId}
            teams={dropdownTeams}
          />
          <Paper elevation={0} className={classes.mainContent}>
            {isEditingReport && (
              <>
                <NotReportedList
                  onChangeItemStatus={setModifiedAttendance}
                  list={notReportedTzoers}
                />
                <Divider className={classes.divider} />
              </>
            )}
            <PresentList
              onRemoveItem={setModifiedAttendance}
              list={presentTzoers}
              isEditingReport={isEditingReport}
            />
            <Divider className={classes.divider} />
            <MissingList
              attendanceList={modifiedAttendance}
              onRemoveItem={setModifiedAttendance}
              list={missingTzoers}
              isEditingReport={isEditingReport}
            />
          </Paper>
          {isEditingReport ? saveReportChip : enterEditReportChip}
        </>
      )}
    </div>
  );
};

export default AttendancePage;
