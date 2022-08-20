import { Dispatch, FC, SetStateAction } from 'react';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ReportedListItem from 'pages/Attendance/ReportedListItem/ReportedListItem';

import { useStyles } from './MissingListStyles';
import { Tzoer } from 'types/tzoer';
import { Attendance } from 'types/attendance';

interface MissingListProps {
  isEditingReport: boolean;
  list: Pick<Tzoer, 'id' | 'first_name' | 'last_name'>[];
  onRemoveItem: Dispatch<SetStateAction<Attendance[]>>;
  attendanceList: Attendance[];
}

const MissingList: FC<MissingListProps> = (props): JSX.Element => {
  const { isEditingReport, list, onRemoveItem, attendanceList } = props;
  const classes = useStyles({ isEditingReport });

  const removeFromList = (tzoerId: number): void => {
    onRemoveItem(prevAttendance =>
      prevAttendance.filter(tzoerAttendance => tzoerAttendance.tzoer_id !== tzoerId)
    );
  };


  return (
    <div className={classes.missingContainer}>
      <Typography className={classes.title}>חסרים</Typography>
      <List className={classes.list}>
        {list.map(tzoer => (
          <ReportedListItem
            onRemove={removeFromList}
            iconURL='icons/missingStatus.svg'
            isEditingReport={isEditingReport}
            name={`${tzoer.first_name} ${tzoer.last_name}`}
            id={tzoer.id}
            children={
              <Typography className={classes.missingReason}>
                {attendanceList.find(({ tzoer_id }) => tzoer_id === tzoer.id)?.missing_reason}
              </Typography>
            }
          />
        ))}
      </List>
    </div>
  );
};

export default MissingList;
