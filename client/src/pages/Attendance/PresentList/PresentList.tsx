import { FC } from 'react';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import { useStyles } from './PresentListStyles';
import AttendanceListItem from 'pages/Attendance/AttendanceListItem/AttendanceListItem';

interface PresentListProps {
  isEditingReport: boolean;
}

const PresentList: FC<PresentListProps> = (props): JSX.Element => {
  const { isEditingReport } = props;
  const classes = useStyles({ isEditingReport });

  return (
    <div className={classes.presentContainer}>
      <Typography className={classes.title}>נמצאים</Typography>
      <List className={classes.list}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => (
          <AttendanceListItem name='תום בן ארויה' iconURL='icons/presentStatus.svg'>
            {isEditingReport ? (
              <IconButton size='small' className={classes.closeButton} aria-label='delete'>
                <CloseIcon />
              </IconButton>
            ) : (
              <></>
            )}
          </AttendanceListItem>
        ))}
      </List>
    </div>
  );
};

export default PresentList;
