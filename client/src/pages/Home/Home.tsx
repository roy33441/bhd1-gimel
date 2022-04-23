import { FC } from 'react';

import ButtonsGroup from 'pages/Home/ButtonsGroup/ButtonsGroup';
import AttendancePreview from 'pages/Home/AttendancePreview/AttendancePreview';
import SchedulePreview from 'pages/Home/SchedulePreview/SchedulePreview';
import { useStyles } from './HomeStyles';
import MyTasks from 'pages/Home/MyTasks/MyTasks';
import SettingsFab from '../../components/Settings/SettingFab/SettingsFab';

const Home: FC = (): JSX.Element => {
  const classes = useStyles();

  return (
    <>
      <ButtonsGroup />
      <div className={classes.topContainer}>
        <AttendancePreview />
        <SchedulePreview />
      </div>
      <div className={classes.bottomContainer}>
        <MyTasks />
      </div>
    </>
  );
};

export default Home;
