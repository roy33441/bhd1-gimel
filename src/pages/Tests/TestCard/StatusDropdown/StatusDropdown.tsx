import React, { FC } from 'react';
import { Theme, withStyles } from '@material-ui/core/styles';
import Menu, { MenuProps } from '@material-ui/core/Menu';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { useStyles } from './StatusDropdownStyles';
import { Status } from 'types/test';

const StyledMenu = withStyles((theme: Theme) => ({
  paper: {
    border: '1px',
    width: theme.spacing(17),
    height: theme.spacing(13)
  }
}))((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    style={{ marginTop: -10 }}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center'
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center'
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    minHeight: 5.5,
    fontSize: 13,
    direction: 'ltr'
  }
}))(MenuItem);

interface StatusDropdownProps {
  options: Status[];
  onChangeStatus: (isFinished: boolean) => void;
}

const StatusDropdown: FC<StatusDropdownProps> = (props): JSX.Element => {
  const { onChangeStatus, options } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSelectStatus = (statusId: number): void => {
    onChangeStatus(statusId === 1);
    handleClose();
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.container}>
      <>
        <IconButton className={classes.button} size='small' onClick={handleClick}>
          {anchorEl ? <ExpandLessIcon /> : <ExpandMoreOutlinedIcon />}
        </IconButton>
        <StyledMenu
          id='customized-menu'
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {options.map(status => (
            <StyledMenuItem key={status.id} onClick={() => handleSelectStatus(status.id)}>
              <ListItemIcon>
                <img className={classes.imageIcon} src={status.iconURL} alt='status' />
              </ListItemIcon>
              <ListItemText style={{ fontSize: 15, textAlign: 'center' }} primary={status.name} />
            </StyledMenuItem>
          ))}
        </StyledMenu>
      </>
    </div>
  );
};

export default StatusDropdown;
