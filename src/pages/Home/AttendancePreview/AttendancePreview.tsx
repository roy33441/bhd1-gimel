import { FC, useState } from "react";
import Paper from "@material-ui/core/Paper";
import Icon from "@material-ui/core/Icon";
import Typography from "@material-ui/core/Typography";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";

import { useStyles } from "./AttendancePreviewStyles";
import CurrentStatus from "components/CurrentStatus/CurrentStatus";
import { Tzoer, TzoerPluga } from "types/tzoer";
import auth from "common/auth";
import { GET_TEAMS_BY_PLUGA } from "queries/teamsQueries";
import { useQuery } from "@apollo/client/react/hooks/useQuery";
import { Team, TeamGQL } from "types/team";
import CircularProgress from "@material-ui/core/CircularProgress";
import TeamsDropdown from "pages/Attendance/Status/TeamsDropdown/TeamsDropdown";
import { GET_TZOERS_BY_PLUGA } from "queries/tzoerQueries";
import { PreviewAttendance } from "types/attendance";
import { GET_ATTENDANCE_BY_PLUGA } from "queries/attendanceQueries";
import { useSubscription } from "@apollo/client/react/hooks/useSubscription";

const PLUGA_ID = -1;

const AttendancePreview: FC = (): JSX.Element => {
  const classes = useStyles();

  const loggedTzoer: Tzoer = auth.getLoggedTzoer();
  const [selectedTeamId, setSelectedTeamId] = useState<number>(
    loggedTzoer.team.id
  );

  const { data: teams, loading: loadingTeams } = useQuery<
    TeamGQL,
    { pluga_id: number }
  >(GET_TEAMS_BY_PLUGA, {
    variables: {
      pluga_id: loggedTzoer.pluga.id,
    },
  });

  const { data: tzoers, loading: loadingTzoers } = useQuery<
    { plugaTzoers: TzoerPluga[] },
    { pluga_id: number }
  >(GET_TZOERS_BY_PLUGA, {
    variables: {
      pluga_id: loggedTzoer.pluga.id,
    },
  });

  const { data: attendance } = useSubscription<
    { attendance: PreviewAttendance[] },
    { pluga_id: number }
  >(GET_ATTENDANCE_BY_PLUGA, {
    variables: {
      pluga_id: loggedTzoer.pluga.id,
    },
  });

  if (loadingTeams || loadingTzoers) {
    return (
      <Paper className={classes.loadingOrErrorContainer}>
        <CircularProgress size={50} color="primary" />
      </Paper>
    );
  }

  if (!teams || !tzoers) {
    return (
      <Paper className={classes.loadingOrErrorContainer}>
        <Typography>שגיאה בטעינת המצ"ל</Typography>
      </Paper>
    );
  }

  const namedTeams: Team[] = teams.teams.map((team) => ({
    ...team,
    name: `צוות ${team.name}`,
  }));
  const dropdownTeams: Team[] = [
    { id: PLUGA_ID, name: loggedTzoer.pluga.name },
    ...namedTeams,
  ];

  const attendanceByTeam: PreviewAttendance[] = attendance
    ? selectedTeamId === PLUGA_ID
      ? attendance.attendance
      : attendance.attendance.filter(
          ({ tzoer: { team_id } }) => team_id === selectedTeamId
        )
    : [];

  const tzoersByTeam: TzoerPluga[] =
    selectedTeamId === PLUGA_ID
      ? tzoers.plugaTzoers
      : tzoers.plugaTzoers.filter(({ team_id }) => team_id === selectedTeamId);

  const presentTzoersByTeamAggregate: number = attendanceByTeam.filter(
    ({ is_present }) => is_present
  ).length;

  const missingTzoersByTeamAggregate: number = attendanceByTeam.filter(
    ({ is_present }) => !is_present
  ).length;

  return (
    <Paper className={classes.container}>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}></div>
        <div className={classes.header}>
          <Typography className={classes.title}>מצ"ל</Typography>
          <div style={{ display: "flex" }}>
            <Typography className={classes.team}>
              {dropdownTeams.find((team) => team.id === selectedTeamId)?.name}
            </Typography>
            <div className={classes.dropdown}>
              <TeamsDropdown
                changeSelectedTeam={setSelectedTeamId}
                teams={dropdownTeams}
              />
            </div>
          </div>
        </div>
        <Icon className={classes.iconRoot}>
          <Link to="/bhd1-gimel/attendance">
            <img
              className={classes.imageIcon}
              src="icons/newStatus.svg"
              alt="status"
            />
          </Link>
        </Icon>
      </div>
      <div className={classes.circularProgressContainer}>
        <CircularProgressbar
          styles={buildStyles({
            pathColor: "#F24C00",
            trailColor: "#6B6A6A",
            textColor: "#F24C00",
          })}
          value={(presentTzoersByTeamAggregate / tzoersByTeam.length) * 100}
          text={`${presentTzoersByTeamAggregate}/${tzoersByTeam.length}`}
        />
      </div>
      <div className={classes.bottom}>
        <CurrentStatus
          missing={missingTzoersByTeamAggregate}
          present={presentTzoersByTeamAggregate}
          total={tzoersByTeam.length}
        />
      </div>
    </Paper>
  );
};

export default AttendancePreview;
