import { FC } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { useStyles } from './AttendancePreviewStyles';

const AttendancePreview: FC = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Typography color='primary'>מצ"ל בקרוב</Typography>
    </Paper>
  );
};

export default AttendancePreview;
