import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Header from './Header';
import Footer from './Footer';

const useStyles = makeStyles(theme => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
}));

export default function Pricing() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Header />
      {/* Hero unit */}
      <Container maxWidth='sm' component='main' className={classes.heroContent}>
        <Typography
          component='h1'
          variant='h2'
          align='center'
          color='textPrimary'
          gutterBottom
        >
          CovidAid
        </Typography>
        <Typography
          variant='h4'
          align='center'
          color='textSecondary'
          component='p'
        >
          Crowd-Sourced Coronavirus Resources & Emergency Aid Directory
        </Typography>
      </Container>
      {/* End hero unit */}
      <Footer />
    </>
  );
}
