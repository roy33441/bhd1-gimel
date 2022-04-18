import { FC } from 'react';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import auth from 'common/auth';
import { useHistory } from 'react-router';
import { useStyles } from './PersonalDetailsStyles';
import SettingsFab from 'components/Settings/SettingFab/SettingsFab';
import { Tzoer } from 'types/tzoer';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { IconButton } from '@material-ui/core';

interface PersonalDetailsProps {
  name: string;
  role: string;
}

const PersonalDetails: FC<PersonalDetailsProps> = (props): JSX.Element => {
  const { name, role } = props;
  const loggedTzoer: Tzoer = auth.getLoggedTzoer();
  const classes = useStyles();
  const history = useHistory();

  const logOut = () => {
    auth.removeLoggedTzoer();
    history.push('/');
  } 

  return (
    <div>
      <Typography className={classes.title} color='secondary'>
        <Box className={classes.box} fontWeight='fontWeightLight'>שלום
          <IconButton size="small" color="primary" className={classes.exit} onClick={logOut}>
            <ExitToAppIcon />
          </IconButton>
          
        </Box>

      </Typography>
      <Typography className={classes.name} color='secondary'>
        {name}
      </Typography>
      <div className={classes.roleContainer}>
        <Chip size='small' className={classes.roleChip} color='primary' label={role} />
        {
          (['סמפ', 'סגל'].includes(loggedTzoer.role.name)) ? (<SettingsFab />) : (<div></div>)
        }
      </div>

    </div>
  );
};

export default PersonalDetails;
