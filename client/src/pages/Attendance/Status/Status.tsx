import { Dispatch, FC, SetStateAction } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import RefreshIcon from '@material-ui/icons/Refresh';
import IconButton from '@material-ui/core/IconButton';

import CurrentStatus from 'components/CurrentStatus/CurrentStatus';
import { useStyles } from './StatusStyles';
import TeamsDropdown from './TeamsDropdown/TeamsDropdown';
import { Team } from 'types/team';

interface StatusProps {
  selectedTeamId: number;
  teams: Team[];
  changeSelectedTeam: Dispatch<SetStateAction<number>>;
  present: number;
  missing: number;
  total: number;
  onClearAttendance: () => void;
}

const Status: FC<StatusProps> = (props): JSX.Element => {
  const { selectedTeamId, teams, changeSelectedTeam, present, missing, total, onClearAttendance } =
    props;
  const classes = useStyles();

  return (
    <Paper elevation={0} className={classes.container}>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}></div>
        <TeamsDropdown
          changeSelectedTeam={changeSelectedTeam}
          selectedTeamId={selectedTeamId}
          teams={teams}
        />
        <div className={classes.resetButton}>
          <Typography className={classes.resetTitle}>נקה דיווח</Typography>
          <IconButton onClick={onClearAttendance} className={classes.resetIcon}>
            <RefreshIcon />
          </IconButton>
        </div>
      </div>
      <div className={classes.statusContainer}>
        <CurrentStatus missing={missing} present={present} total={total} />
      </div>
    </Paper>
  );
};

export default Status;
