import { FC } from 'react';
import Icon from '@material-ui/core/Icon';
import PersonalDetails from 'components/PersonalDetails/PersonalDetails';
import { useStyles } from './TopBarStyles';
import { Tzoer } from 'types/tzoer';
import auth from 'common/auth';

const TopBar: FC = (): JSX.Element => {
  const loggedTzoer: Tzoer = auth.getLoggedTzoer();
  const classes = useStyles();

  return (
    <div className={classes.topBar}>
      <PersonalDetails
        name={`${loggedTzoer.first_name} ${loggedTzoer.last_name}`}
        role={loggedTzoer.role.name}
      />
      <div>
        <Icon>
          <img src='icons/logo.svg' alt='logo' />
        </Icon>
      </div>
    </div>
  );
};

export default TopBar;
