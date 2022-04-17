import { FC } from 'react';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';

import { useStyles } from './NotReportedListStyles';
import AttendanceListItem from 'pages/Attendance/AttendanceListItem/AttendanceListItem';

const NotReportedList: FC = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.notReportedContainer}>
      <Typography className={classes.title}>עוד לא הוזן דיווח</Typography>
      <List className={classes.list}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => (
          <AttendanceListItem
            name='תום בן ארויה'
            iconURL='icons/notReportedStatus.svg'
          ></AttendanceListItem>
        ))}
      </List>
    </div>
  );
};

export default NotReportedList;
