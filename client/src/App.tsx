import { FC } from 'react';

import Router from 'common/router';
import TopBar from 'components/TopBar/TopBar';
import BottomBar from 'components/BottomBar/BottomBar';

const App: FC = (): JSX.Element => (
  <>
    <Router />
  </>
);

export default App;
