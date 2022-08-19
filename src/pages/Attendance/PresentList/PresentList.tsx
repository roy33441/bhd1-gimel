import { Dispatch, FC, SetStateAction } from 'react';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';

import { useStyles } from './PresentListStyles';
import ReportedListItem from 'pages/Attendance/ReportedListItem/ReportedListItem';
import { Tzoer } from 'types/tzoer';
import { Attendance } from 'types/attendance';

interface PresentListProps {
  isEditingReport: boolean;
  list: Pick<Tzoer, 'id' | 'first_name' | 'last_name'>[];
  onRemoveItem: Dispatch<SetStateAction<Attendance[]>>;
}

const PresentList: FC<PresentListProps> = (props): JSX.Element => {
  const { isEditingReport, list, onRemoveItem } = props;
  const classes = useStyles({ isEditingReport });

  const removeFromList = (tzoerId: number): void => {
    onRemoveItem(prevAttendance =>
      prevAttendance.filter(tzoerAttendance => tzoerAttendance.tzoer_id !== tzoerId)
    );
  };

  return (
    <div className={classes.presentContainer}>
      <Typography className={classes.title}>נמצאים</Typography>
      <List className={classes.list}>
        {list.map(tzoer => (
          <ReportedListItem
            onRemove={removeFromList}
            iconURL='icons/presentStatus.svg'
            isEditingReport={isEditingReport}
            name={`${tzoer.first_name} ${tzoer.last_name}`}
            id={tzoer.id}
          />
        ))}
      </List>
    </div>
  );
};

export default PresentList;
