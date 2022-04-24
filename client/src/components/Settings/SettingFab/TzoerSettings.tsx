import React from 'react';
import { FC } from 'react';
import Button from '@material-ui/core/Button';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import Divider from '@material-ui/core/Divider';
import RotateLeftOutlinedIcon from '@material-ui/icons/RotateLeftOutlined';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'
import Slide from '@material-ui/core/Slide';
import { useStyles } from './TzoerSettingsStyles';
import { TransitionProps } from '@material-ui/core/transitions';
import * as XLSX from "xlsx";
import { useMutation } from '@apollo/client';
import { Tzoer, TzoerGQL } from 'types/tzoer';
import { ADD_TZOER, DELETE_ALL_TZOERS } from 'mutations/tzoerMutation';
import { Drawer } from '@material-ui/core';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}


const TzoerSettings: FC = (): any => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [openReset, setOpenReset] = React.useState(false);
  const [openAlert, setOpenAlert] = React.useState(true);

  const onComplete = () => {
    console.log(addTzoerError)
    console.log(addTzoerData)
    setOpenAlert(true)
  }

  const [addTzoerArray, {
    data: addTzoerData,
    loading: addTzoerLoading,
    error: addTzoerError
  }] = useMutation(ADD_TZOER, { onCompleted: onComplete, onError: onComplete });

  const [deleteAllTzoers, {
    data: deleteTzoerData,
    loading: deleteTzoerLoading,
    error: deleteTzoerError
  }] = useMutation(DELETE_ALL_TZOERS, { onCompleted: onComplete, onError: onComplete });

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
      console.log(data)
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
    console.log(newTzoerArray)
    addTzoerArray({ variables: { objects: newTzoerArray } })
    toggleDrawer()
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
      <Snackbar open={openAlert} autoHideDuration={2500} onClose={() => setOpenAlert(false)}>

        <div>
          {
            addTzoerError ? (
              <div>
                <Alert className={classes.alert} severity='error'>שגיאה בהוספת צוערים!!!</Alert>
              </div>
            ) : (
              <div />
            )
          }
          {
            addTzoerData ? (
              <div>
                <Alert className={classes.alert} severity='success'>צוערים נוספו בהצלחה!</Alert>
              </div>
            ) : (
              <div />
            )
          }
          {
            deleteTzoerData ? (
              <div>
                <Alert className={classes.alert} severity='error'>שגיאה באיפוס צוערים!!!</Alert>
              </div>
            ) : (
              <div />
            )
          }
          {
            deleteTzoerError ? (
              <div>
                <Alert className={classes.alert} severity='error'>כל הצוערים אופסו!!!</Alert>
              </div>
            ) : (
              <div />
            )
          }

        </div>
      </Snackbar>
      <div>
        <React.Fragment>
          <Drawer anchor="bottom" open={open} onClose={toggleDrawer}>
            <div>
              <div className={classes.paperDrawer}>
                {!openReset ? (
                  <div>
                    <div className={classes.importContainer}>
                      <Typography className={classes.drawerTitel} >רוצים להוסיף צוערים?</Typography>
                    </ div>
                    <div className={classes.infoContainer}>

                      <InfoOutlinedIcon color="primary" />
                      <Typography  className={classes.infoTitle} >מה צריך להיות אקסל?!!</Typography>
                      <Link className={classes.infoTitle} to="/files/תבנית_להוספת_צוערים.xlsx" target="_blank" download>
                      תלחצו ממש כאן
                    </Link>
                    </ div>
                    <div className={classes.importContainer}>
                      <input
                        className={classes.input}
                        id="button-file"
                        disabled={openReset}
                        accept=".xlsx"
                        type="file"
                        onChange={(event: any) => {
                          const file: File = event.target.files[0];
                          readFile(file);
                        }}
                      />
                      <label htmlFor="button-file">
                        <Button
                          component="span"
                          className={classes.button}
                          disabled={openReset}
                          startIcon={<AttachFileOutlinedIcon />}
                        >
                          <Typography className={classes.buttontitel} > לכאן גוררים קובץ אקסל </Typography>
                        </Button>
                      </ label>
                    </div>
                    <Divider variant="middle" />
                  </div>
              ) : (
              <div />
              )
                }
              <div>
                <div className={classes.importContainer}>
                  <Typography className={classes.resetTitel} >מחזור חדש? כדאי לאפס את הצוערים!</Typography>
                </ div>
                <div className={classes.importContainer}>

                  <Button
                    className={classes.button}
                    startIcon={<RotateLeftOutlinedIcon />}
                    onClick={toggleReset}
                    disabled={openReset}
                  >
                    <Typography className={classes.buttontitel} >איפוס צוערים</Typography>
                  </Button>

                </div>
              </div>

              {openReset ? (
                <div >
                  <div className={classes.importContainer}>
                    <InfoOutlinedIcon color="primary" />
                    <Typography className={classes.infoTitle} >שים לב! פעולה זו תאפס את כל הצוערים!</Typography>
                  </ div>
                  <div className={classes.importContainer}>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.smallButton}
                      onClick={handleResetTzoers}
                    >
                      <Typography>איפוס</Typography>
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      className={classes.smallButton}
                      onClick={toggleReset}
                    >
                      <Typography >ביטול</Typography>
                    </Button>
                  </div>
                </div>

              ) : (
                <div></div>
              )}
              <Divider variant="middle" />

            </div>
          </div>
        </Drawer>
      </React.Fragment >
    </div >
    </div >

  );
}

export default TzoerSettings;
