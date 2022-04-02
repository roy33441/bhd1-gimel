import { FC } from 'react';
import List from '@material-ui/core/List';

import Test from 'pages/Tests/Test/Test';

const Tests: FC = (): JSX.Element => {
  return (
    <List>
      <Test
        isFinished={false}
        link='https://docs.google.com/forms/d/e/1FAIpQLScNE2KyxNISEbOhVoDyF2QQeBabJT-VNsQOWri8fs1vrK5wiw/viewform?usp=sf_link'
        numOfQuestions={40}
        title='מטווחים'
      />
      <Test
        isFinished={true}
        link='https://docs.google.com/forms/d/e/1FAIpQLScNE2KyxNISEbOhVoDyF2QQeBabJT-VNsQOWri8fs1vrK5wiw/viewform?usp=sf_link'
        numOfQuestions={40}
        title='מטווחים'
      />
      <Test
        isFinished={false}
        link='https://docs.google.com/forms/d/e/1FAIpQLScNE2KyxNISEbOhVoDyF2QQeBabJT-VNsQOWri8fs1vrK5wiw/viewform?usp=sf_link'
        numOfQuestions={40}
        title='מטווחים'
      />
      <Test
        isFinished={true}
        link='https://docs.google.com/forms/d/e/1FAIpQLScNE2KyxNISEbOhVoDyF2QQeBabJT-VNsQOWri8fs1vrK5wiw/viewform?usp=sf_link'
        numOfQuestions={40}
        title='מטווחים'
      />
    </List>
  );
};

export default Tests;
