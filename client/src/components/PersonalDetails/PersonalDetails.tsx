import { FC } from 'react';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';

import { useStyles } from './PersonalDetailsStyles';

interface PersonalDetailsProps {
  name: string;
  role: string;
}

const PersonalDetails: FC<PersonalDetailsProps> = (props): JSX.Element => {
  const { name, role } = props;
  const classes = useStyles();

  return (
    <div>
      <Typography className={classes.title} color='secondary'>
        <Box fontWeight='fontWeightLight'>שלום</Box>
      </Typography>
      <Typography className={classes.name} color='secondary'>
        {name}
      </Typography>
      <Chip size='small' className={classes.roleChip} color='primary' label={role} />
    </div>
  );
};

export default PersonalDetails;
