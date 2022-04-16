import { FC } from 'react';
import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from 'react-router-dom';

import { useStyles } from './AttendancePreviewStyles';
import CurrentStatus from 'components/CurrentStatus/CurrentStatus';

const AttendancePreview: FC = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Paper className={classes.container}>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}></div>
        <div className={classes.header}>
          <Typography className={classes.title}>מצ"ל</Typography>
          <Typography className={classes.dropdown}>צוות 16</Typography>
        </div>
        <Icon className={classes.iconRoot}>
          <Link to='/attendance'>
            <img className={classes.imageIcon} src='icons/newStatus.svg' alt='status' />
          </Link>
        </Icon>
      </div>
      <div className={classes.circularProgressContainer}>
        <CircularProgressbar
          styles={buildStyles({
            pathColor: '#F24C00',
            trailColor: '#6B6A6A',
            textColor: '#F24C00'
          })}
          value={60}
          text={'22/43'}
        />
      </div>
      <div className={classes.bottom}>
        <CurrentStatus missing={11} present={22} total={43} />
      </div>
    </Paper>
  );
};

export default AttendancePreview;
