import { FC } from 'react';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import AttendanceListItem from 'pages/Attendance/AttendanceListItem/AttendanceListItem';

import { useStyles } from './MissingListStyles';

interface MissingListProps {
  isEditingReport: boolean;
}

const MissingList: FC<MissingListProps> = (props): JSX.Element => {
  const { isEditingReport } = props;
  const classes = useStyles({ isEditingReport });

  return (
    <div className={classes.missingContainer}>
      <Typography className={classes.title}>חסרים</Typography>
      <List className={classes.list}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => (
          <AttendanceListItem name='תום בן ארויה' iconURL='icons/missingStatus.svg'>
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

export default MissingList;
