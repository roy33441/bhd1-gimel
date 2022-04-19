import React from 'react';
import { FC } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { useStyles } from './SettingsFabStyles';
import { TransitionProps } from '@material-ui/core/transitions';
import * as XLSX from "xlsx";
import { useMutation } from '@apollo/client';
import { Tzoer, TzoerGQL } from 'types/tzoer';
import { ADD_TZOER, DELETE_ALL_TZOERS } from 'mutations/tzoerMutation';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { Chip, Drawer } from '@material-ui/core';
import auth from 'common/auth';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const SettingsFab: FC = (): any => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [addTzoerArray, { data, loading, error }] = useMutation(ADD_TZOER);
  const [deleteAllTzoers] = useMutation(DELETE_ALL_TZOERS);
  const [openReset, setOpenReset] = React.useState(false);
  const loggedTzoer: Tzoer = auth.getLoggedTzoer();

  const handleResetTzoers = () => {
    deleteAllTzoers();
  }

  const readFile = (file: File) => {
    let reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = (e: any) => {
      e.preventDefault();
      const workbook = XLSX.read(e.target.result, { type: 'buffer' });
      const worksheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[worksheetName];
      const data: any = XLSX.utils.sheet_to_json(worksheet);
      insertTzoerArray(data)
    }
  }

  const insertTzoerArray = (tzoerArray: any) => {
    var newTzoerArray: any = [];
    tzoerArray.map((currTzoer: any, key: any) => {
      const tzoer: Tzoer = {
        ...currTzoer,
        personal_id: String(currTzoer.personal_id),
        password: String("Aa" + currTzoer.personal_id + "!")
      }
      newTzoerArray.push(tzoer);
    });

  }

  const toggleDrawer = () => {
    setOpen(!open);
    setOpenReset(false);
  }

  const toggleReset = () => {
    setOpenReset(!openReset)
  }


  return (
    <div>
      <IconButton onClick={toggleDrawer}>
        <img className={classes.imageIcon} src='icons/userManagement.svg' alt='icon' />
      </IconButton>
      <div>
        <React.Fragment>
          <Drawer anchor="bottom" open={open} onClose={toggleDrawer}>
            <div>
              <div className={classes.paperDrawer}>
                <div className={classes.importContainer}>
                  <Typography className={classes.drawerTitel} >רוצים להוסיף צוערים?</Typography>
                </ div>
                <div className={classes.importContainer}>
                  <input
                    className={classes.input}
                    id="button-file"
                    accept=".xlsx"
                    type="file"
                    onChange={(event: any) => {
                      const file: File = event.target.files[0];
                      readFile(file);
                    }}
                  />
                  <label htmlFor="button-file">
                    <Button
                      variant="contained"
                      color="primary"
                      component="span"
                      className={classes.button}
                      startIcon={<CloudUploadIcon />}
                    >
                      <Typography className={classes.buttontitel} >הוספת צוערים</Typography>
                    </Button>
                  </ label>
                </div>
                <Divider />

                <div className={classes.importContainer}>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<DeleteSweepIcon />}
                    onClick={toggleReset}
                  >
                    <Typography className={classes.buttontitel} >איפוס צוערים</Typography>
                  </Button>
                </div>
                {openReset ? (
                  <div >
                    <div className={classes.importContainer}>
                      <Typography className={classes.drawerTitel} >האם לאפס את כל הצוערים?</Typography>
                    </ div>
                    <div className={classes.importContainer}>
                      <Button
                        variant="contained"
                        color="primary"
                        className={classes.smallButton}
                        onClick={handleResetTzoers}
                      >
                        <Typography>אישור!</Typography>

                      </Button>
                      <Button
                        variant="contained"
                        color="secondary"
                        className={classes.smallButton}
                        onClick={toggleReset}
                      >
                        <Typography >ביטול!</Typography>
                      </Button>
                    </div>
                  </div>

                ) : (
                  <div>
                  </div>
                )}

              </div>
            </div>
          </Drawer>
        </React.Fragment >
      </div >
    </div >

  );
}

export default SettingsFab;
