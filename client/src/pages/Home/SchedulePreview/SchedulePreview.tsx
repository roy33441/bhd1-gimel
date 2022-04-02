import { FC } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { useStyles } from './SchedulePreviewStyles';

const SchedulePreview: FC = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Typography>לו"ז בקרוב</Typography>
    </Paper>
  );
};

export default SchedulePreview;
