import { FC } from "react";
import useTheme from "@material-ui/core/styles/useTheme";

import LinkButton from "components/LinkButton/LinkButton";
import { useStyles } from "./ButtonsGroupStyles";

const ButtonsGroup: FC = (): JSX.Element => {
  const theme = useTheme();
  const classes = useStyles();

  const sitesURLs = {
    report: "https://one.prat.idf.il/",
    idf: "https://www.idf.il/",
    moodle: "https://campus.digital.idf.il/",
    drive:
      "https://drive.google.com/drive/folders/1F9Npaoi4llEOJcX92dnrHpBz1bHwDzdn?usp=sharing",
  };

  return (
    <div className={classes.container}>
      <LinkButton
        siteURL={sitesURLs.report}
        iconURL="icons/report.svg"
        label='דו"ח 1'
        color={theme.palette.primary.light}
      />
      <LinkButton
        siteURL={sitesURLs.idf}
        iconURL="icons/idf.svg"
        label='אתר צה"ל'
        color={theme.palette.info.light}
      />
      <LinkButton
        siteURL={sitesURLs.moodle}
        iconURL="icons/moodle.svg"
        label="מודל"
        color={theme.palette.success.light}
      />
      <LinkButton
        siteURL={sitesURLs.drive}
        iconURL="icons/googleDrive.svg"
        label="דרייב קהד"
        color={"#BFACC8"}
      />
    </div>
  );
};

export default ButtonsGroup;
