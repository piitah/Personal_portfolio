import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import PhoneIcon from '@material-ui/icons/Phone';
// import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import SvgIcon from '@material-ui/core/SvgIcon';
import IconButton from "@material-ui/core/IconButton"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#0d0d0d",
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  styleIcon: {
      width:"100%",
      padding: "4px 8px",
      flexFlow: 1,
      backgroundColor: "#fff"
  }
}));

function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }
export default function NavigationTab() {
  const classes = useStyles();
  // const [value, setValue] = React.useState(0);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  return (
    <Paper square className={classes.root}>
        <div className={classes.styleIcon}>
            <IconButton >
                <HomeIcon fontSize="medium"/>
            </IconButton>
        </div>
        <div className={classes.styleIcon}>
            <IconButton >
                <PersonPinIcon fontSize="medium"/>
            </IconButton>
        </div>
        <div className={classes.styleIcon}>
            <IconButton >
                <PersonPinIcon fontSize="medium"/>
            </IconButton>
        </div>
        <div className={classes.styleIcon}>
            <IconButton >
                <PersonPinIcon fontSize="medium"/>
            </IconButton>
        </div>
        <div className={classes.styleIcon}>
            <IconButton >
                <PersonPinIcon fontSize="medium"/>
            </IconButton>
        </div>
    </Paper>
  );
}