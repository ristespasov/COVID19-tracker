import React from 'react';

// COMPONENTS
import Cover from '../Cover/Cover';

// MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    text: {
        marginBottom: 50,
        padding: '0 25px'
    }
}));

const About = () => {
    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <Cover />
            <Grid item xs={12} md={6} className={classes.text}>
                <Typography variant="subtitle2" gutterBottom>Coronavirus disease 2019 (COVID-19) is an infectious disease caused by severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2). It was first identified in December 2019 in Wuhan, China, and has resulted in an ongoing pandemic. The first confirmed case has been traced back to 17 November 2019.</Typography>
                <Typography variant="subtitle2" gutterBottom>Common symptoms include fever, cough, fatigue, shortness of breath, and loss of smell and taste. While the majority of cases result in mild symptoms, some progress to acute respiratory distress syndrome (ARDS) possibly precipitated by cytokine storm,[14] multi-organ failure, septic shock, and blood clots. The time from exposure to onset of symptoms is typically around five days, but may range from two to fourteen days.</Typography>
                <Typography variant="subtitle2" gutterBottom>The virus is primarily spread between people during close contact, most often via small droplets produced by coughing, sneezing, and talking. The droplets usually fall to the ground or onto surfaces rather than travelling through air over long distances. Less commonly, people may become infected by touching a contaminated surface and then touching their face. It is most contagious during the first three days after the onset of symptoms, although spread is possible before symptoms appear, and from people who do not show symptoms.</Typography>
                <Typography variant="subtitle2" gutterBottom>Recommended measures to prevent infection include frequent hand washing, maintaining physical distance from others (especially from those with symptoms), quarantine (especially for those with symptoms), covering coughs, and keeping unwashed hands away from the face. The use of cloth face coverings such as a scarf or a bandana has been recommended by health officials in public settings to minimise the risk of transmissions, with some authorities requiring their use. Health officials also stated that medical-grade face masks, such as N95 masks, should only be used by healthcare workers, first responders, and those who directly care for infected individuals.</Typography>
                <Typography variant="subtitle2" gutterBottom>According to the World Health Organization (WHO), there are no vaccines nor specific antiviral treatments for COVID-19. Management involves the treatment of symptoms, supportive care, isolation, and experimental measures.</Typography>
            </Grid>
        </Grid>
    )
}

export default About;