import { Dispatch, FC, SetStateAction } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import CurrentStatus from 'components/CurrentStatus/CurrentStatus';
import { useStyles } from './TotalStatusStyles';
import { Team } from 'types/team';
import TeamsDropdown from 'pages/Attendance/Status/TeamsDropdown/TeamsDropdown';

interface StatusProps {
  selectedTeamId: number;
  teams: Team[];
  changeSelectedTeam: Dispatch<SetStateAction<number>>;
  present: number;
  missing: number;
  total: number;
}

const Status: FC<StatusProps> = (props): JSX.Element => {
  const { selectedTeamId, teams, changeSelectedTeam, present, missing, total } = props;
  const classes = useStyles();

  const namedTeams: Team[] = teams.map(team => ({ ...team, name: `צוות ${team.name}` }));

  return (
    <Paper elevation={0} className={classes.container}>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}>
        <Typography style={{ fontSize: 18 }}>
          {namedTeams.find(team => team.id === selectedTeamId)?.name}
        </Typography>
        <TeamsDropdown changeSelectedTeam={changeSelectedTeam} teams={namedTeams} />
      </div>
      <div className={classes.statusContainer} style={{ marginTop: 2 }}>
        <CurrentStatus missing={missing} present={present} total={total} />
      </div>
    </Paper>
  );
};

export default Status;
