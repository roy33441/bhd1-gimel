import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import RefreshIcon from '@material-ui/icons/Refresh';
import IconButton from '@material-ui/core/IconButton';

import CurrentStatus from 'components/CurrentStatus/CurrentStatus';
import { useStyles } from './StatusStyles';

const Status = () => {
  const classes = useStyles();

  return (
    <Paper elevation={0} className={classes.container}>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}></div>
        <div className={classes.dropdown}>
          <Typography className={classes.team}>צוות 16</Typography>
          <ExpandMoreOutlinedIcon />
        </div>
        <div className={classes.resetButton}>
          <Typography className={classes.resetTitle}>נקה דיווח</Typography>
          <IconButton className={classes.resetIcon}>
            <RefreshIcon />
          </IconButton>
        </div>
      </div>
      <div className={classes.statusContainer}>
        <CurrentStatus missing={11} present={22} total={43} />
      </div>
    </Paper>
  );
};

export default Status;
