import { FC, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CircularProgress, { CircularProgressProps } from '@material-ui/core/CircularProgress';

import { useStyles } from './AttendancePreviewStyles';
import { Grid, List, ListItem } from '@material-ui/core';

const AttendancePreview: FC = (): JSX.Element => {
  const [sumCount, setCount] = useState(59);
  const [presentCount, setPresentCount] = useState(46);
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <List>
        <ListItem className={classes.listItem}>
          <Typography className={classes.title}>מצ"ל</Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Box position="relative" display="inline-flex">
            <CircularProgress size={100} variant="determinate" value={Math.round(sumCount/presentCount*100)}/>
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
        </ListItem>
        <br />
        <ListItem>
          <Grid container  
                direction="row"
                justifyContent="space-between"
                alignItems="flex-end" 
                spacing={3}>
            <Grid item xs={3}>
              <Typography className={classes.details}>סה"כ</Typography>
              <Typography className={classes.details}>{sumCount}</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography className={classes.details}>נוכחים</Typography>
              <Typography className={classes.details}>{presentCount}</Typography>            
            </Grid>
            <Grid item xs={3}>
              <Typography className={classes.details}>נעדרים</Typography>
              <Typography className={classes.details}>{sumCount-presentCount}</Typography>    
            </Grid>
          </Grid>
        </ListItem>
      </List>

      

    </Paper>
  );
};

export default AttendancePreview;
