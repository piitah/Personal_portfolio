import React, {useRef, useEffect} from 'react';
import {Route, Switch} from "react-router-dom"
import Header from "../src/components/Header.js"
import Profile from "../src/components/Profile"
import SideBar from "../src/components/SideBar.js"
import { makeStyles} from "@material-ui/core/styles";
import {Power3, TimelineLite,} from "gsap"
const useStyles = makeStyles((theme) => ({
  root: {
    width:"100%",
    display:"flex",
    flexDirection:"row",
    justifyContent:"start",
    // opacity:"0",
  },
  wrap: {
    width: "100%",
    fontFamily : "Camphor, Open Sans, Segoe UI, san-serif !important"
  },
  sideWrap : {
    width:"73px",
    [theme.breakpoints.down("sm")] : {
      width:"0"
    }
  },
  sideBar : {
    width: "73px",
    
  },
  preload_wrapper: {
    position:"fixed",
    display:"flex",
    flexDirection:"row",
    top:"0",
    left:"0",
    width:"100% !important",
    height:"100vh",
    zIndex: 999
  },
  preload_1: {
    width:"100% !important",
    height:"100vh",
    backgroundColor:"#fff !important",
  },
  preload_2 : {
    width:"100% !important",
    height:"100vh",
    backgroundColor:"#red !important",
  },
  preload_3:{
    width:"100% !important",
    height:"100vh",
    backgroundColor:"#fff !important",
  }
}));

function App() {
  const classes = useStyles();
  // const wrap = useRef(null);
  // const root1 = useRef(null)
  useEffect(() => {
    // const wrap1 = wrap.current.children[0];
    // const wrap2 = wrap1.nextSibling;
    // const wrap3 = wrap2.nextSibling;
    // const root = root1.current.children[0]
    // const root2 = root.nextSibling
    // const root = document.querySelector("#root")
    // console.log(root.children[0],root2.children[0])
    const tl = new TimelineLite({delay: 0.8})
    // tl.to([wrap1, wrap2, wrap3], {
    //   y:-700,
    //   opacity:0,
    //   duration:.8,
    //   ease:Power3.easeIn,
    //   stagger: {
    //     amount: .2
    //   }
    // })
    // .from([root1, root2], {
    //   opacity:1,
      // ducration:1
      // visibility:visible,
    // })
  })
  return (
    <div className={classes.wrap}>
      {/* <div className={classes.preload_wrapper}>
        <span className={classes.preload_1}></span>
        <span className={classes.preload_2}></span>
        <span className={classes.preload_3}></span>
      </div> */}
      <div className={classes.root}>
        <div className={classes.sideWrap}>
          <SideBar className={classes.sidebar}/>
          {/* <Header></Header> */}
        </div>
        <div style={{width:"100%", position:"relative"}}>
        <Switch>
          <Route path="/" exact component={Profile} />
        </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
