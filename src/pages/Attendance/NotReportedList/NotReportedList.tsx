import { Dispatch, FC, SetStateAction } from 'react';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';

import { useStyles } from './NotReportedListStyles';
import NotReportedListItem from 'pages/Attendance/NotReportedList/NotReportedListItem/NotReportedListItem';
import { Tzoer } from 'types/tzoer';
import { Attendance } from 'types/attendance';

interface NotReportedListProps {
  list: Pick<Tzoer, 'id' | 'first_name' | 'last_name'>[];
  onChangeItemStatus: Dispatch<SetStateAction<Attendance[]>>;
}

const NotReportedList: FC<NotReportedListProps> = (props): JSX.Element => {
  const { list, onChangeItemStatus } = props;
  const classes = useStyles();

  const handlePresentStatus = (tzoerId: number): void => {
    onChangeItemStatus(prevAttendance => [
      ...prevAttendance,
      { tzoer_id: tzoerId, is_present: true }
    ]);
  };

  const handleMissingStatus = (tzoerId: number, missingReason: string): void => {
    onChangeItemStatus(prevAttendance => [
      ...prevAttendance,
      { tzoer_id: tzoerId, is_present: false, missing_reason: missingReason }
    ]);
  };

  return (
    <div className={classes.notReportedContainer}>
      <Typography className={classes.title}>עוד לא הוזן דיווח</Typography>
      {list.length > 0 ? (
        <List className={classes.list}>
          {list.map(tzoer => (
            <NotReportedListItem
              onReportMissing={handleMissingStatus}
              onReportPresent={handlePresentStatus}
              key={tzoer.id}
              id={tzoer.id}
              name={`${tzoer.first_name} ${tzoer.last_name}`}
            />
          ))}
        </List>
      ) : (
        <div className={classes.finishReportContainer}>
          <Typography className={classes.finishReportTitle}>
            כל הכבוד! על כולם הוזן דיווח!
          </Typography>
          <img src='icons/finishReport.svg' alt='finishReport' />
        </div>
      )}
    </div>
  );
};

export default NotReportedList;
