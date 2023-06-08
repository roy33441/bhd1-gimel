import { FC, useState } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./SchedulePreviewStyles";
import {
  IconButton,
  Divider,
  Icon,
  Drawer,
  TextField,
  Chip,
  CircularProgress,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import React from "react";
import {
  OnSubscriptionDataOptions,
  useMutation,
  useSubscription,
} from "@apollo/client";
import { Schedule, ScheduleGQL } from "types/schedule";
import { GET_SCHEDULE_BY_TEAM } from "queries/scheduleQueries";
import { Tzoer } from "types/tzoer";
import auth from "common/auth";
import { UPDATE_SCHEDULE } from "mutations/scheduleMutation";

const SchedulePreview: FC = (): JSX.Element => {
  const classes = useStyles();
  const loggedTzoer: Tzoer = auth.getLoggedTzoer();
  const [open, setOpen] = useState(false);
  const [schedule, setSchedule] = useState<String>("");
  const [updateSchedule] = useMutation(UPDATE_SCHEDULE);
  const { data: scheduleData, loading: loadingScheduleData } = useSubscription<
    ScheduleGQL,
    {
      team_id: number;
    }
  >(GET_SCHEDULE_BY_TEAM, {
    variables: {
      team_id: loggedTzoer.team.id,
    },
    onSubscriptionData(options: OnSubscriptionDataOptions<ScheduleGQL>): any {
      setSchedule(
        options.subscriptionData.data?.teamSchedule[0]?.schedule as string
      );
    },
  });

  if (false && loadingScheduleData) {
    return (
      <Paper className={classes.paper}>
        <div className={classes.header}>
          <Typography className={classes.title}>לו"ז צוותי</Typography>
        </div>
        <div className={classes.loaderErrorContainer}>
          <CircularProgress size={20} color="primary" />
        </div>
      </Paper>
    );
  }

  if (true || !scheduleData) {
    return (
      <Paper className={classes.paper}>
        <div className={classes.header}>
          <Typography className={classes.title}>לו"ז צוותי</Typography>
        </div>
        <div className={classes.loaderErrorContainer}>
          <Typography>שגיאה בטעינת הב"בים</Typography>
        </div>
      </Paper>
    );
  }

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const onCompleteSchedule = (currSchedule: String) => {
    setSchedule(currSchedule);
  };

  const onSubmitSchedule = (currSchedule: String) => {
    toggleDrawer();
    updateSchedule({
      variables: {
        objects: { team_id: loggedTzoer.team.id, schedule: currSchedule },
      },
    });
  };

  return (
    <div>
      <Paper className={classes.paper}>
        <div className={classes.header}>
          <Typography className={classes.title}>לו"ז צוותי</Typography>
          {auth.editSchedulePermissions.includes(loggedTzoer.role.name) ? (
            <div>
              <IconButton size="small" onClick={toggleDrawer}>
                <EditIcon className={classes.editIcon} color="inherit" />
              </IconButton>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className={classes.luz}>
          {schedule.split("\n").map((item) => {
            if (item != "") {
              return (
                <div>
                  <Typography key={item} className={classes.luzItem}>
                    {item}
                  </Typography>
                  <Divider />
                </div>
              );
            }
          })}
        </div>
      </Paper>
      <div className={classes.divDrawer}>
        <Drawer anchor="bottom" open={open} onClose={toggleDrawer}>
          <div className={classes.paperDrawer}>
            <div className={classes.updateContainer}>
              <Typography className={classes.drawerTitel}>
                שנעדכן את הלו"ז הצוותי?
              </Typography>
            </div>
            <div className={classes.updateContainer}>
              <TextField
                className={classes.textInput}
                id="outlined-multiline-static"
                multiline
                variant="outlined"
                maxRows={20}
                value={schedule}
                onChange={(event) => onCompleteSchedule(event.target.value)}
              />
            </div>
            <div className={classes.updateContainer}>
              <Chip
                className={classes.updateButton}
                color="primary"
                label="!עדכן עכשיו"
                onClick={() => onSubmitSchedule(schedule)}
              />
            </div>
          </div>
        </Drawer>
      </div>
    </div>
  );
};

export default SchedulePreview;
