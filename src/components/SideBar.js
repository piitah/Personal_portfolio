import React, {useRef, useEffect} from 'react';
import {NavLink} from "react-router-dom"
import {Link} from 'react-scroll'
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Facebook from "@material-ui/icons/Facebook";
import Twitter from "@material-ui/icons/Twitter";
import Instagram from "@material-ui/icons/Instagram";
import IconButton from "@material-ui/core/IconButton";
import SvgIcon from '@material-ui/core/SvgIcon';
import img from "../assets/p2.png"
import {Power3, TimelineLite,} from "gsap"
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor :"#040809",
    position: "fixed",
    width: "70px",
    minHeight: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "center",
    top: 0,
    left: 0,
    zIndex: '3',
    [theme.breakpoints.down("sm")]: {
      flexDirection: "row",
      display:"none",
      width: "100%",
      height: "60px",
      minHeight: "60px"
    }
  },
  navLink: {
    display: "flex", 
    width: "70px", 
    padding: "0", 
    margin: "auto", 
    justifyContent: "", 
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "row",
      backgroundColor: "green",
      justifyContent: ""
    }
  },
  navIcon: {
    color: "#909096",
    fontSize: "18px",
    margin: "15px 0",
    transition: ".3s ease-in",
    "&:hover": {
        color: "#fd2155; !important"
    }
  },
  list: {
    width:"100%",
    [theme.breakpoints.down("sm")]: {
     margin: "0",
    },
    "&:hover" : {
      backgroundColor: "#fd2155",
      "& $navIcon": {
        color: "#fff !important"
      }
    }
  },
  sociallLnk : {
    width:"100%",
    display: "flex", 
    flexDirection: "column",
  },
  IconButton: {
    width:"70px",
    padding:"10px 0px",
    backgroundColor:"#fd2155"
  },
  styleIcon: {
    width:"100%",
    color: "#909096", 
    fontSize: "13px",
    transition: ".3s ease-in",
    "&:hover" : {
        color: "#fd2155;"
    }
  },
  isActive : {
    backgroundColor: "#fd2155;",
    "& $navIcon": {
      color:"#fff !important",
    }
  }
}));

function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }
export default function SideBar() {
  const classes = useStyles();
  const logo = useRef(null);
  const navLink = useRef(null);
  
  let tl = new TimelineLite({delay:0.8});
    
  useEffect(() => {
    const logofocus = logo.current.children[0]
    const H_navLink = navLink.current.children[0]
    const P_navLink = H_navLink.nextSibling;
    const S_navLink = P_navLink.nextSibling;
    const Pro_navLink = S_navLink.nextSibling;
    const C_navLink = Pro_navLink.nextSibling;
    console.log(H_navLink)
    tl.from(logofocus, {
      y:-60,
      opacity:0,
      duration:.8,
      ease:Power3.easeIn,
      stagger: {
        amount: .2
      }
    })
    .from([ H_navLink.children, P_navLink.children, S_navLink.children, Pro_navLink.children, C_navLink.children], {
      x:-50,
      opacity:0,
      duration:.5,
      ease:Power3.easeIn,
      stagger: {
        amount: .2
      }
    })
  })
  return (
    <div className={classes.root}>
        <div ref={logo}>
             <span>
                <img src={img} style={{width:"50px", padding:"10px", backgroundColor:"black"}}/>
             </span>
        </div>
        <div className={classes.navLink} ref={navLink}>
           <Link activeClass={classes.isActive} to="Home" spy={true} smooth={true}>
              <ListItem className={classes.list} button>
                <ListItemIcon style={{minWidth:"100%"}}><div style={{width:"", margin:"auto"}}><HomeIcon className={classes.navIcon}/></div></ListItemIcon>
              </ListItem>
            </Link>
            <Link activeClass={classes.isActive} to="Work" spy={true} smooth={true}> 
              <ListItem className={classes.list} button>
                  <ListItemIcon style={{minWidth:"100%"}}><div style={{width:"", margin:"auto"}}><MenuIcon className={classes.navIcon}/></div></ListItemIcon>
              </ListItem>
            </Link>
            <Link activeClass={classes.isActive} to="Profile" spy={true} smooth={true}>
              <ListItem className={classes.list} button>
                  <ListItemIcon style={{minWidth:"100%"}}><div style={{width:"", margin:"auto"}}><MailIcon className={classes.navIcon}/></div></ListItemIcon>
              </ListItem>
            </Link>
            <Link activeClass={classes.isActive} to="About" spy={true} smooth={true}>
              <ListItem className={classes.list} button>
                  <ListItemIcon style={{minWidth:"100%"}}><div style={{width:"", margin:"auto"}}><InboxIcon className={classes.navIcon}/></div></ListItemIcon>
              </ListItem>
            </Link>
            <NavLink activeClass={classes.isActive} to={"/Contact"}>
              <ListItem className={classes.list} button>
                  <ListItemIcon style={{minWidth:"100%"}}><div style={{width:"", margin:"auto"}}><InboxIcon className={classes.navIcon}/></div></ListItemIcon>
              </ListItem>
            </NavLink>
        </div>
        <div className={classes.socialLinks}>
            <div className={classes.IconButton} >
                <Instagram className={classes.styleIcon}/> 
            </div>
            <div className={classes.IconButton}>
                <Facebook className={classes.styleIcon} />
            </div>
            <div className={classes.IconButton}>
                <Twitter className={classes.styleIcon}/>
            </div>
        </div>
    </div>
  );
}