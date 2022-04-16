import React from 'react';
import { FC } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import SettingsIcon from '@material-ui/icons/Settings';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import { Fab } from '@material-ui/core';
import * as XLSX from "xlsx";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      position: 'relative',
      direction: 'rtl'
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
    input: {
      display: 'none',
    },
  }),
);

const readUploadFile = () => {
  // e.preventDefault();
  // if (e.target.files) {
  //     const reader = new FileReader();
  //     reader.onload = (e) => {
  //         const data = e.target.result;
  //         const workbook = xlsx.read(data, { type: "array" });
  //         const sheetName = workbook.SheetNames[0];
  //         const worksheet = workbook.Sheets[sheetName];
  //         const json = xlsx.utils.sheet_to_json(worksheet);
  //         console.log(json);
  //     };
  //     reader.readAsArrayBuffer(e.target.files[0]);
  // }
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const SettingsFab: FC = (): any => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const xlsx = require('xlsx');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const readFile = (file: File) => {
    let reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = (e: any) => {
      e.preventDefault();
      const workbook = XLSX.read(e.target.result, { type: 'buffer' });
      const worksheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[worksheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);
    }
  }



  return (
    <div>
      <Fab color="secondary" aria-label="add" onClick={handleClickOpen}>
        <SettingsIcon />
      </Fab>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              הגדרות
            </Typography>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem button>
            <ListItemText primary="איפוס צוערים" secondary="איפוס של כל הצוערים" />
          </ListItem>
          <Divider />
          <ListItem button>
            <input
              className={classes.input}
              id="contained-button-file"
              type="file"
              onChange={(event: any) => {
                const file: File = event.target.files[0];
                readFile(file);
              }}
            />
            <label htmlFor="contained-button-file">
              <Button variant="contained" color="primary" component="span">
                Upload
              </Button>
            </label>
            <ListItemText primary="העלת צוערים" secondary="העלת קובץ אקסל" />

          </ListItem>
        </List>
      </Dialog>
    </div>
  );
}

export default SettingsFab;
