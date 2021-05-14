import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
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
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    margin: 'auto',
    [theme.breakpoints.down('xs')]: {
      width: 400,
    },
    [theme.breakpoints.up('sm')]: {
      width: 500,
    },
    [theme.breakpoints.up('md')]: {
      width: 700,
    },
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
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
      <Grid>
        <Paper component='form' elevation={3} className={classes.root}>
          <InputBase
            className={classes.input}
            placeholder='Search CovidAid Resources'
            inputProps={{ 'aria-label': 'Search CovidAid Resources' }}
          />
          <IconButton
            type='submit'
            className={classes.iconButton}
            aria-label='search'
          >
            <SearchIcon />
          </IconButton>
        </Paper>
      </Grid>
      {/* End hero unit */}
      <Footer />
    </>
  );
}
