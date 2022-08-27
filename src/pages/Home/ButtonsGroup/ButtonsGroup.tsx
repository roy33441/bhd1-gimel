import { FC } from "react";
import useTheme from "@material-ui/core/styles/useTheme";

import LinkButton from "components/LinkButton/LinkButton";
import auth from "common/auth";
import { Tzoer } from "types/tzoer";
import { useStyles } from "./ButtonsGroupStyles";

const ButtonsGroup: FC = (): JSX.Element => {
  const theme = useTheme();
  const classes = useStyles();
  const loggedTzoer: Tzoer = auth.getLoggedTzoer();

  const sitesURLs = {
    report: "https://one.prat.idf.il/",
    idf: "https://www.idf.il/",
    moodle: "https://campus.digital.idf.il/",
    drive:
      "https://drive.google.com/drive/folders/1F9Npaoi4llEOJcX92dnrHpBz1bHwDzdn",
  };

  const teamDrives = [
    {
      team: 1,
      drive:
        "https://drive.google.com/drive/folders/1-F3y_9hZp-bhX9xk_Sr_3BueU2_ov33D",
    },
    {
      team: 2,
      drive:
        "https://drive.google.com/drive/folders/13lpBps8efMEmPS7A5cwqtIyCz2tKqvs9",
    },
    {
      team: 3,
      drive:
        "https://drive.google.com/drive/folders/1Gu-ycw4oF1HsQLANm5BL9aA0QI-A1IJN",
    },
    {
      team: 4,
      drive:
        "https://drive.google.com/drive/folders/112Y4aFHro9jL_4MX6pZTVpiDRmHsyX_W?usp=sharing",
    },
  ];

  const driveByTeam = (team: number) =>
    teamDrives.find(({ team: currentTeam }) => currentTeam === team)!.drive;

  return (
    <div className={classes.container}>
      <LinkButton
        siteURL={sitesURLs.report}
        iconURL="icons/report.svg"
        label='דו"ח 1'
        color={theme.palette.primary.light}
      />
      <LinkButton
        siteURL={driveByTeam(loggedTzoer.team.id)}
        iconURL="icons/googleDrive.svg"
        label="דרייב צוותי"
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
