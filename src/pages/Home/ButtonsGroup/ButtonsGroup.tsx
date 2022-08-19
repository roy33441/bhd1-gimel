import { FC } from 'react';
import useTheme from '@material-ui/core/styles/useTheme';

import LinkButton from 'components/LinkButton/LinkButton';
import { useStyles } from './ButtonsGroupStyles';

const ButtonsGroup: FC = (): JSX.Element => {
  const theme = useTheme();
  const classes = useStyles();

  const sitesURLs = {
    report: 'https://one.prat.idf.il/',
    idf: 'https://www.idf.il/',
    moodle: 'https://campus.digital.idf.il/',
    telegramBot: 'https://t.me/BHD1_bot'
  };

  return (
    <div className={classes.container}>
      <LinkButton
        siteURL={sitesURLs.report}
        iconURL='icons/report.svg'
        label='דו"ח 1'
        color={theme.palette.primary.light}
      />
      <LinkButton
        siteURL={sitesURLs.idf}
        iconURL='icons/idf.svg'
        label='אתר צה"ל'
        color={theme.palette.info.light}
      />
      <LinkButton
        siteURL={sitesURLs.moodle}
        iconURL='icons/moodle.svg'
        label='מודל'
        color={theme.palette.success.light}
      />
      <LinkButton
        siteURL={sitesURLs.telegramBot}
        iconURL='icons/telegramBot.svg'
        label='בוט'
        color={'#BFACC8'}
      />
    </div>
  );
};

export default ButtonsGroup;
