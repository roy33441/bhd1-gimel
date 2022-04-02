import { FC } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';

import { useStyles } from './LinkButtonStyles';

interface LinkButtonProps {
  iconURL: string;
  label: string;
  color: string;
  siteURL: string;
}

const LinkButton: FC<LinkButtonProps> = (props): JSX.Element => {
  const { iconURL, label, color, siteURL } = props;
  const classes = useStyles({ color });

  const openSiteTab = (): Window | null => window.open(siteURL, '_blank');

  return (
    <div className={classes.container}>
      <IconButton onClick={openSiteTab}>
        <Avatar className={classes.button}>
          <Icon>
            <img className={classes.imageIcon} src={iconURL} alt='icon' />
          </Icon>
        </Avatar>
      </IconButton>
      <Typography className={classes.label}>{label}</Typography>
    </div>
  );
};

export default LinkButton;
