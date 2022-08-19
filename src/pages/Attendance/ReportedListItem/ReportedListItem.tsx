import { FC } from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import { useStyles } from './ReportedListItemStyles';

interface ReportedListItemProps {
  name: string;
  id: number;
  iconURL: string;
  isEditingReport: boolean;
  onRemove: (tzoerId: number) => void;
  children?: JSX.Element;
}

const ReportedListItem: FC<ReportedListItemProps> = props => {
  const { name, iconURL, isEditingReport, id, onRemove, children } = props;
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
        {isEditingReport && (
          <IconButton
            onClick={() => onRemove(id)}
            size='small'
            className={classes.closeButton}
            aria-label='delete'
          >
            <CloseIcon />
          </IconButton>
        )}
      </ListItem>
      <Divider className={classes.divider} />
    </>
  );
};

export default ReportedListItem;
