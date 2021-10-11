import React  from "react"
import { makeStyles } from '@material-ui/core/styles';
import { FaReact, FaVuejs} from 'react-icons/fa';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import bg1 from "../assets/bg1.jpg"
import bg2 from "../assets/bg2.jpg"

const useStyles = makeStyles(() => ({
    card : {
        position:  "relative",
        display:"block",
        backfaceVisibility: "hidden",
        width: "100%",
        height:"100%",
        height:"max-content",
        cursor:"pointer",
        overflow:"hidden",
        transition:"all 0.5",
        // boxShadow:" rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
        "&:hover": {
            "& $card_img": {
                transform: "scale(1.3)",
            },
            "& $card_overlay":{
                opacity:"1",
            },
            "& $card__rect":{
                top:"0%",
                "&::before": {
                    transform:"translateY(-400px)",
                }
            },
            "& $card__tri":{
                top:"-150%",
                "&::before": {
                    transform:"translateY(-10px)",
                }
            }
        }
    },
    card_img: {
        transform:"scale(1)",
        transition: "all 0.5s ease"
    },
    card_overlay : {
        position: "absolute",
        width:"100%",
        height:"100%",
        top:"0",
        left: '-100%',
        backgroundImage: "linear-gradient(to right bottom,rgb(8 253 216 / 96%),rgb(206 22 66 / 22%))"
    },
    card__rect: {
        width: "850px",
        height: "950px",
        backgroundColor:"#fff",
        position:"absolute",
        top:"180%",
        left:"-200%",
        transform:"rotate(40deg)",
        opacity: ".9",
        transition: "all .4s ease-in-out",
        "&::before": {
            content:"''",
            display:"block",
            position:"relative",
            backgroundColor:"#3f9e90f7",
            width:"100%",
            height:"100%",
            transform:"translateY(200px)",
            transition: "all .5s ease-in-out",
            transitionDelay: ".1s"
        }
    },  
    card__tri : {
        width: "400px",
        height: "400px",
        backgroundColor:"#fff",
        position:"absolute",
        top:"-300%",
        left:"59%",
        transform:"rotate(45deg)",
        transition: "all .4s ease-in-out",
        "&::before": {
            content:"''",
            display:"block",
            position:"relative",
           backgroundColor: "#fd2155",
            width:"100%",
            height:"100%",
            transform:"translateY(-100px)",
            transition: "all .5s ease-in-out",
            transitionDelay: ".1s"
        }
    },
    card_inner_wrap: {
        // backgroundColor:"#fff",
        margin:"10px 0"
    },
    card_title: {
        margin:"0",
        fontSize: "18px",
        fontFamily:"camphor",
        fontWeight: "600",
        color:"#0ae1c0",
        width:"max-content",
        "&::before": {
            content: "''",
            top:"23px",
            left:"0",
            position:"absolute",
            width:"10%",
            height:"3px",
            backgroundColor:"#fff"
        }

    },
    card_desc: {
        fontSize: "12px",
        fontFamily:"camphor",
        fontWeight: "300",
    },
    card_stacks: {
        display:"flex",
        flexDirection:"row"
    },
    card_no : {
        position:"absolute",
        top: "0",
        right:"8%",
        fontSize:"50px",
        fontFamily:"xyz",
        fontWeight: "600",
    },
    stacks: {
        marginBottom:"10px",
        display: "flex",
        width:"max_content",
        flexDirection:"row"
    },
    skills_wrapper: {
        // width:"100%",
        
    },
    skills : {
        fontFamily:"camphor",
        fontSize:"14px",
        fontWeight:"500",
        padding:"5px 15px",
        backgroundColor:"#eee",
        color:"black",
        borderRadius:"20px",
        margin:"0px 7px 0px 0px",
        boxShadow:" rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
    },
    link_wrapper: {
        width:"100%",
        display:"flex",
        flexDirection: "row",
        justifyContent:"start",
        alignItems:"normal",
        cursor:"pointer"
    },
    port_link:{
        fontSize:"13px",
        fontFamily: "camphor",
        position:"relative",
        width:"max-content",
        color:"#fff",
        cursor:"Pointer",
        "&::before": {
            content: "''",
            top:"19px",
            left:"0",
            position:"absolute",
            width:"100%",
            height:"1.5px",
            backgroundColor:"#fff"
        }
    }
}))

export default function Card (props) {
    const classes = useStyles()
    return (
        <>
            <div className={classes.card}>
                <img src={bg1} className={classes.card_img} style={{width:"100%"}}></img>
                {/* <div className={classes.card_overlay}>
                </div> */}
                <span className={classes.card__rect}></span>
                <span className={classes.card__tri}></span>
            </div>
            <div className={classes.card_inner_wrap}>
                <p className={classes.card_title}>{props.details.title}</p>
                <p className={classes.card_desc}>
                    {props.details.desc}
                </p>
                <div className={classes.stacks}>
                    {
                        props.details.stacks.map((stack, key) => {
                            return (
                                <div className={classes.skills_wrapper}>
                                    <div key={key} className={classes.skills}>{stack}</div>
                                </div>
                            )
                        })
                    }
                    {/* <span className={classes.skills}>Vue</span>
                    <span className={classes.skills} >Vuex</span>
                    <span className={classes.skills}>Vuetify</span> */}
                </div>
                <div className={classes.link_wrapper}>
                    <span className={classes.port_link}>Visit Site</span> <ArrowRightAltIcon style={{marginLeft:"7px", color:"#0ae1c0"}}/>
                </div>
            </div>
        </>
    )
}
