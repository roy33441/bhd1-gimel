import { FC, useState } from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import Collapse from '@material-ui/core/Collapse';
import TextField from '@material-ui/core/TextField';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import IconButton from '@material-ui/core/IconButton';

import { useStyles } from './NotReportedListItemStyles';

interface NotReportedListItemProps {
  name: string;
  id: number;
  onReportPresent: (tzoerId: number) => void;
  onReportMissing: (tzoerId: number, missingReason: string) => void;
}

const NotReportedListItem: FC<NotReportedListItemProps> = props => {
  const { name, id, onReportPresent, onReportMissing } = props;
  const classes = useStyles();

  const [isMissingClicked, setIsMissingClicked] = useState<boolean>(false);
  const [missingReason, setMissingReason] = useState<string>('');

  const handleChangeMissingReasonInput = (event: React.ChangeEvent<{ value: unknown }>): void => {
    setMissingReason(event.target.value as string);
  };

  return (
    <>
      <ListItem>
        <ListItemIcon className={classes.iconRoot}>
          <img className={classes.imageIcon} src='icons/notReportedStatus.svg' alt='status' />
        </ListItemIcon>
        <ListItemText
          classes={{ primary: classes.listItemText }}
          className={classes.name}
          primary={name}
        />
        <Chip
          onClick={() => {
            onReportPresent(id);
            setIsMissingClicked(false);
          }}
          className={classes.presentChip}
          label='נמצא'
          variant='outlined'
        />
        <Chip
          onClick={() => {
            setIsMissingClicked(prevIsMissingClicked => !prevIsMissingClicked);
          }}
          className={classes.missingChip}
          label='חסר'
          variant='outlined'
        />
      </ListItem>
      <Collapse in={isMissingClicked}>
        <div className={classes.missingReasonContainer}>
          <TextField
            className={classes.inputMissingReason}
            InputLabelProps={{
              classes: { root: classes.labelRoot, shrink: classes.shrink }
            }}
            size='small'
            value={missingReason}
            onChange={handleChangeMissingReasonInput}
            label='למה חסר?'
          />
          <IconButton
            onClick={() => onReportMissing(id, missingReason)}
            className={classes.enterButton}
          >
            <KeyboardReturnIcon />
          </IconButton>
        </div>
      </Collapse>
      <Divider className={classes.divider} />
    </>
  );
};

export default NotReportedListItem;
