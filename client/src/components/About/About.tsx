import React from 'react';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { useStyles } from './AboutStyles';
import DeveloperCard from './DeveloperCard/DeveloperCard';
import { Divider, Typography } from '@material-ui/core';

const developers = [
    {
        name: "תום בן ארויה",
        age: "22",
        city: "קרית אונו",
        job: "תוכניתן",
        instagramURL: "https://www.instagram.com/tom_benaroya/?igshid=YmMyMTA2M2Y=",
        imgURL: "/icons/tom.jpeg"
    },
    {
        name: "יואל פבלובסקי",
        age: "22",
        city: "פתח תקווה",
        job: "תוכניתן",
        instagramURL: "https://www.instagram.com/joel_pavlovsky/?igshid=YmMyMTA2M2Y=",
        imgURL: "/icons/joel.jpeg"
    },
    {
        name: "דפנה פרידלר",
        age: "21",
        city: "מבשרת ציון",
        job: "מאפיינת UI/UX",
        instagramURL: "https://instagram.com/daphne_friedler?igshid=YmMyMTA2M2Y=",
        imgURL: "/icons/daphne.jpeg"
    },
    {
        name: "רן שליטין",
        age: "22",
        city: "רמת גן",
        job: "תוכניתן",
        instagramURL: "https://instagram.com/ran_shalitin?igshid=YmMyMTA2M2Y=",
        imgURL: "/icons/ran.jpeg"
    }
]
export default function BadgeAvatars() {
    const classes = useStyles();

    const openSiteTab = (siteURL: any) => {
        window.open(siteURL, '_blank');
    }
    return (
        <div className={classes.root}>
            <Typography className={classes.titel}>
                קצת עלינו
            </ Typography>

            <Typography className={classes.context}>
                אפליקציית "צוער" נוסדה בשנת 2022 עבורכם, צוערי בה"ד 1.
                האפליקצייה נועדה ליעל, לסדר ולרכז את כל המידע במקום אחד שיהיה כמה שיותר נוח ונגיש לצוער במשך ההכשרה.
            </ Typography>
            <Typography className={classes.titel}>
                מי אנחנו?
            </ Typography>
            <Divider variant="middle" />

            {developers.map((item, index) => {
                return (
                    <div key={item.name} style={index%2==1 ? {direction: 'ltr'} : {}}>
                        <DeveloperCard
                            name={item.name}
                            age={item.age}
                            city={item.city}
                            job={item.job}
                            imgURL={item.imgURL}
                            instagramURL={item.instagramURL}
                        />
                        <Divider variant="middle" />
                    </div>

                )
            }

            )}
        </div>
    );
}
