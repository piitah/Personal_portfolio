import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import NavigationTab from "../components/NavigationTab.js"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    backgroundColor: "#141717",
    minHeight: "64px"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <Typography style={{color: "orangered", margin: 0, padding: 0, flexGrow: 1}} variant="h4">
             P
          </Typography>
          <IconButton color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
        {/* <NavigationTab/> */}
      </AppBar>
    </div>
  );
}