import { FC, useState } from 'react';
import Icon from '@material-ui/core/Icon';
import { useStyles } from './DeveloperCardStyles';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { Theme, makeStyles, withStyles, createStyles } from '@material-ui/core/styles';
import { Typography, Divider } from '@material-ui/core';


interface DeveloperCardProps {
    instagramURL: string;
    imgURL: string;
    name: string;
    age: string;
    city: string;
    job: string;
}


const DeveloperCard: FC<DeveloperCardProps> = (props): JSX.Element => {
    const classes = useStyles();
    const { name, age, city, job, imgURL, instagramURL } = props;

    const openSiteTab = (siteURL: any) => {
        window.open(instagramURL, '_blank');
    }
    return (
        <div className={classes.card}>
            <img  onClick={openSiteTab}className={classes.avatar} src={imgURL} alt="Avatar" />
            <div>
                <Typography className={classes.cardTitel}>
                    {name}
                </Typography>
                <Typography className={classes.cardSubTitel}>
                    {age}, {city}, {job}
                </Typography>
            </div>
        </div>
    );
};

export default DeveloperCard;
