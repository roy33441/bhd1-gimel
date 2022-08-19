import { FC } from 'react';
import Typography from '@material-ui/core/Typography';

import { useStyles } from './CurrentStatusStyles';

interface CurrentStatusProps {
  missing: number;
  total: number;
  present: number;
}

const CurrentStatus: FC<CurrentStatusProps> = (props): JSX.Element => {
  const { missing, total, present } = props;
  const classes = useStyles();

  return (
    <>
      <div className={classes.statusContainer}>
        <Typography className={classes.number}>{total}</Typography>
        <Typography className={classes.status}>סה"כ</Typography>
      </div>
      <div className={classes.currStatusContainer}>
        <Typography className={classes.number}>{present}</Typography>
        <Typography className={classes.status}>נוכחים</Typography>
      </div>
      <div className={classes.statusContainer}>
        <Typography className={classes.number}>{missing}</Typography>
        <Typography className={classes.status}>נעדרים</Typography>
      </div>
    </>
  );
};

export default CurrentStatus;
