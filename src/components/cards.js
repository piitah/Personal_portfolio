import React  from "react"
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';


const useStyles = makeStyles((theme) => ({
    card : {
        position:  "relative",
        display:"block",
        backfaceVisibility: "hidden",
        width: "100%",
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
                opacity:"1",
                "&::before": {
                    transform:"translateY(-400px)",
                }
            },
            "& $card__tri":{
                top:"-150%",
                opacity:"1",
                "&::before": {
                    transform:"translateY(-10px)",
                }
            },
            "& $card_inner_wrap":{
                top:"0",
                left:"0",
                height:"100%",
                display:"flex",
                flexDirection:"row",
                justifyContent:"center",
                alignItems:"center",
                opacity:"1"
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
        height: "1250px",
        backgroundColor:"#fff",
        position:"absolute",
        top:"180%",
        left:"-207%",
        transform:"rotate(40deg)",
        opacity: "0",
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
        opacity:"0",
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
        backfaceVisibility: "hidden",
        position:"absolute",
        top:"350px",
        left:"0",
        // height:"100%",
        padding:"0 10px",
        opacity:"0",
        transition: "all .6s ease-in-out",
        maxWidth:"100%",
    },
    card_title: {
        margin:"0",
        fontSize: "18px",
        fontFamily:"camphor",
        fontWeight: "600",
        // color:"#0ae1c0",
        color:"#fd2155",
        width:"max-content",
        [theme.breakpoints.down("sm")]: {
            fontSize: "1rem",
            fontWeight: "600",
        },
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
        fontSize: "0.7rem",
        fontFamily:"camphor",
        fontWeight: "300",
        color:"#fbe9e9",
        wordWrap:"break-word",
        [theme.breakpoints.down("sm")]: {
            fontSize: "0.8rem",
        },
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
        flexDirection:"row",
        [theme.breakpoints.down("sm")]: {
            marginBottom:"5px",
            marginTop:"9px"
        },
    },
    skills_wrapper: {
        // width:"100%",
        
    },
    skills : {
        fontFamily:"camphor",
        fontSize:"10px",
        fontWeight:"500",
        padding:"5px 10px",
        backgroundColor:"#eee",
        color:"black",
        borderRadius:"20px",
        margin:"0px 7px 0px 0px",
        boxShadow:" rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
        [theme.breakpoints.down("sm")]: {
            fontSize: "8px",
        },
    },
    link_wrapper: {
        width:"100%",
        display:"flex",
        flexDirection: "row",
        justifyContent:"start",
        alignItems:"normal",
        cursor:"pointer",
        textDecoration:"none",
        marginTop: "19px",
        [theme.breakpoints.down("sm")]: {
            marginTop: "12px",
        },
    },
    port_link:{
        fontSize:"13px",
        fontFamily: "camphor",
        position:"relative",
        width:"max-content",
        color:"#fff",
        cursor:"Pointer",
        [theme.breakpoints.down("sm")]: {
            fontSize: "8px",
        },
        "&::before": {
            content: "''",
            top:"19px",
            left:"0",
            position:"absolute",
            width:"100%",
            height:"1.5px",
            backgroundColor:"#fff",
            [theme.breakpoints.down("sm")]: {
            top:"14px",
        },
        }
    }
}))

export default function Card (props) {
    const classes = useStyles()
    return (
        <>
            <div className={classes.card}>
                <img src={props.details.img} alt="" className={classes.card_img} style={{width:"100%"}}></img>
                {/* <div className={classes.card_overlay}>
                </div> */}
                <span className={classes.card__rect}></span>
                <span className={classes.card__tri}></span>
                <div className={classes.card_inner_wrap}>
                    <div style={{position:"relative"}}>
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
                        </div>
                        <div >
                            <Link className={classes.link_wrapper} to={{ pathname: props.details.link }} target="_blank">
                                <span className={classes.port_link}>Visit The Website</span> 
                                <ArrowRightAltIcon style={{marginLeft:"7px", color:"#fff"}}/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}
