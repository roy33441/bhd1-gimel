import { FC } from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import { useStyles } from './AttendanceListItemStyles';

interface AttendanceListItemProps {
  name: string;
  iconURL: string;
  children?: JSX.Element;
}

const AttendanceListItem: FC<AttendanceListItemProps> = props => {
  const { name, iconURL, children } = props;
  const classes = useStyles();

  return (
    <>
      <ListItem>
        <ListItemIcon className={classes.iconRoot}>
          <img className={classes.imageIcon} src={iconURL} alt='status' />
        </ListItemIcon>
        <ListItemText
          classes={{ primary: classes.listItemText }}
          className={classes.name}
          primary={name}
        />
        {children}
      </ListItem>
      <Divider className={classes.divider} />
    </>
  );
};

export default AttendanceListItem;
