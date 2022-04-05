import { FC, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CircularProgress, { CircularProgressProps } from '@material-ui/core/CircularProgress';

import { useStyles } from './AttendancePreviewStyles';

const AttendancePreview: FC = (): JSX.Element => {
  const [sumCount, setCount] = useState(46);
  const [presentCount, setPresentCount] = useState(59);
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Box position="relative" display="inline-flex">
        <CircularProgress variant="determinate" value={Math.round(presentCount/sumCount*100)}/>
        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="caption" component="div" color="textSecondary">{presentCount}/{sumCount}</Typography>
        </Box>
    </Box>

    </Paper>
  );
};

export default AttendancePreview;
