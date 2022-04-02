import { FC } from 'react';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';

import { useStyles } from './PersonalDetailsStyles';

const PersonalDetails: FC = (): JSX.Element => {
  const classes = useStyles();
  
  return (
    <div>
      <Typography className={classes.title} color='secondary'>
        <Box fontWeight='fontWeightLight'>שלום</Box>
      </Typography>
      <Typography className={classes.name} color='secondary'>תום בן ארויה</Typography>
      <Chip size='small' className={classes.roleChip} color='primary' label='קה"ד' />
    </div>
  );
};

export default PersonalDetails;
