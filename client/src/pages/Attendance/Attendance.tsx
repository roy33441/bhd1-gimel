import { FC, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import SaveIcon from '@material-ui/icons/Save';
import CreateIcon from '@material-ui/icons/Create';
import Divider from '@material-ui/core/Divider';

import { useStyles } from './AttendanceStyles';
import Status from 'pages/Attendance/Status/Status';
import NotReportedList from 'pages/Attendance/NotReportedList/NotReportedList';
import PresentList from 'pages/Attendance/PresentList/PresentList';
import MissingList from 'pages/Attendance/MissingList/MissingList';

const Attendance: FC = (): JSX.Element => {
  const [isEditingReport, setIsEditingReport] = useState<boolean>(true);
  const classes = useStyles({ isEditingReport });

  const saveReportChip: JSX.Element = (
    <Chip
      className={classes.saveReportChip}
      onClick={() => setIsEditingReport(false)}
      icon={<SaveIcon />}
      size='small'
      color='secondary'
      label='שמור דיווח'
    />
  );

  const enterEditReportChip: JSX.Element = (
    <Chip
      className={classes.editReportChip}
      onClick={() => setIsEditingReport(true)}
      icon={<CreateIcon style={{ color: 'white' }} />}
      size='small'
      label='ערוך דיווח'
    />
  );

  return (
    <div className={classes.container}>
      <Status />
      <Paper elevation={0} className={classes.mainContent}>
        {isEditingReport && (
          <>
            <NotReportedList />
            <Divider className={classes.divider} />
          </>
        )}
        <PresentList isEditingReport={isEditingReport} />
        <Divider className={classes.divider} />
        <MissingList isEditingReport={isEditingReport} />
      </Paper>
      {isEditingReport ? saveReportChip : enterEditReportChip}
    </div>
  );
};

export default Attendance;
