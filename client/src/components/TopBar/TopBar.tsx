import { FC, useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import PersonalDetails from 'components/PersonalDetails/PersonalDetails';
import About from 'components/About/About';
import { useStyles } from './TopBarStyles';
import { Tzoer } from 'types/tzoer';
import auth from 'common/auth';
import { Drawer } from '@material-ui/core';

const TopBar: FC = (): JSX.Element => {
  const loggedTzoer: Tzoer = auth.getLoggedTzoer();
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <div className={classes.topBar}>
      <PersonalDetails
        name={`${loggedTzoer.first_name} ${loggedTzoer.last_name}`}
        role={loggedTzoer.role.name}
      />
      <div>
        <IconButton onClick={() => setOpenDrawer(true)}>
          <img src='icons/logo.svg' alt='logo' />
        </IconButton>
      </div>
      <Drawer anchor="bottom" open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <div className={classes.drawerContainer}>
          <About />
        </div>
      </Drawer>
    </div >
  );
};

export default TopBar;
