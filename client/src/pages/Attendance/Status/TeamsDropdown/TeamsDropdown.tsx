import React, { Dispatch, FC, SetStateAction } from 'react';
import { Theme, withStyles } from '@material-ui/core/styles';
import Menu, { MenuProps } from '@material-ui/core/Menu';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import { useStyles } from './TeamsDropdownStyles';
import { Team } from 'types/team';

const StyledMenu = withStyles((theme: Theme) => ({
  paper: {
    border: '1px',
    width: theme.spacing(16),
    height: theme.spacing(18)
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
    fontSize: 13
  }
}))(MenuItem);

interface TeamsDropdownProps {
  selectedTeamId: number;
  teams: Team[];
  changeSelectedTeam: Dispatch<SetStateAction<number>>;
}

const TeamsDropdown: FC<TeamsDropdownProps> = (props): JSX.Element => {
  const { selectedTeamId, teams, changeSelectedTeam } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSelectTeam = (teamId: number): void => {
    changeSelectedTeam(teamId);
    handleClose();
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.container}>
      <Typography className={classes.team}>
        צוות {teams.find(team => team.id === selectedTeamId)?.name}
      </Typography>
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
          {teams.map(team => (
            <StyledMenuItem onClick={() => handleSelectTeam(team.id)}>
              צוות {team.name}
            </StyledMenuItem>
          ))}
        </StyledMenu>
      </>
    </div>
  );
};

export default TeamsDropdown;
