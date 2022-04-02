import { FC } from 'react';
import Icon from '@material-ui/core/Icon';

import PersonalDetails from 'components/PersonalDetails/PersonalDetails';
import { useStyles } from './TopBarStyles';

const TopBar: FC = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.topBar}>
      <PersonalDetails />
      <div>
        <Icon>
          <img src='icons/logo.svg' alt='logo' />
        </Icon>
      </div>
    </div>
  );
};

export default TopBar;
