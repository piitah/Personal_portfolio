import React, {useRef, useEffect} from "react"
import {makeStyles, withStyles} from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import TextField from '@material-ui/core/TextField';
import Particles from 'react-particles-js';
import hoverEffect from "hover-effect" 
import Grid from '@material-ui/core/Grid';
import { Container } from "@material-ui/core";
import {TweenMax, Power3, Power4, TimelineLite} from "gsap"
import Card from "../components/cards"
import {datas} from "../Data"
// assets
import Img from "../assets/p2.png"
import jblue from "../assets/jblue.png"
import bg1 from "../assets/bg1.jpg"
import bg2 from "../assets/bg2.jpg"
import bg3 from "../assets/bg3.jpg"
import bg4 from "../assets/bg4.jpg"
import bg5 from "../assets/bg5.jpg"
import bg6 from "../assets/bg6.jpg"
import bg7 from "../assets/bg7.jpg"
import bg8 from "../assets/bg8.jpg"
import map from "../assets/map.png"
import space from "../assets/bbgg.jpg"

const useStyles = makeStyles((theme)=> ({
    root: {
        visibility: "hidden",
        backgroundColor : "#1d1d1d",
        minHeight: "100vh",
        color: "#fff",
        width: "100%",
        position: "relative"
    },
    container : {
        display: "flex",
        margin : "auto",
        width: "100%",
        minHeight: "100%",
    },
    details: {
        position:"relative",
        overflow: "hidden",
        display: "flex",
        width: "100%",
        height: "100vh",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        zIndex:"1",
        backgroundImage: `linear-gradient(
            to right bottom,
            rgba(0, 0, 0, 0.729),
            rgba(0, 0, 0, 0.7)
            ),url(${space})`,        
        backgroundPosition: "center",
        minHeight: "100vh",
        backgroundSize: "cover",
    },
    details_inner: {
        display: "flex",
        margin : "auto",
        justifyContent:"center",
        alignItems:"center",
        width: "80%",
        minHeight: "100%",
    },
    font : {    
        margin: "0",
        fontSize: "85px",
        fontWeight: "800",
        color: "white",
        width: "100%",
        letterSpacing: "3px",
        fontFamily:"xyz",
        lineHeight: "0px",
        [theme.breakpoints.down("sm")]: {
            fontSize: "37px",
            letterSpacing: "-0px",
            lineHeight: "2px",
            marginBottom:"60px"
        },
    },
    emoji_container : {
        position:"relative"
    },
    emoji : {
        position:"absolute",
        top:"0px",
        fontSize:"45px"
    },
    title: {
        marginTop: "-30px",
        fontFamily:  "Camphor, Open Sans, Segoe UI, san-serif !important",
        fontSize: "13px",
        letterSpacing: "0px",
        color: "#969090"
    },
    contact_btn : {
        marginTop : "20px"
    },
    portfolio_wrapper: {
        position:"relative",
        width: "90%",
        margin: "auto",
        zIndex:"20",
        [theme.breakpoints.down("xs")]: {
            width:"100%"
        }
    },
    portfolio_wrapper_inner: {
        position:"relative",
        margin: "auto",
    },
    portfolio_underlay: {
        fontSize:"20rem",
        fontWeight:"500",
        fontFamily:"xyz",
        position: "absolute",
        right:"-20%",
        overflow:"one",
        top:"50%",
        color:"#333",
        zIndex:"-10",
        [theme.breakpoints.down("xs")]: {
            right:"-70%",
            fontSize: "15rem"
        },
    },
    card : {
        position:  "relative",
        display:"block",
        backfaceVisibility: "hidden",
        width: "100%",
        height:"100%",
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
                    transform:"translateY(-100px)",
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
        width: "750px",
        height: "750px",
        backgroundColor:"#fff",
        position:"absolute",
        top:"180%",
        left:"-78%",
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
        position:"absolute",
        bottom: "0",
        left:"8%"
    },
    card_title: {
        margin:"0",
        fontSize: "18px",
        fontFamily:"camphor",
        fontWeight: "500",
        "&::before": {
            content: "''",
            top:"23px",
            left:"0",
            position:"absolute",
            width:"30px",
            height:"2px",
            backgroundColor:"#fff"
        }

    },
    card_desc: {
        fontSize: "11px",
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
    portfolio_Header : {
        fontSize : "80px",
        fontFamily: "xyz !important",
        fontWeight: "600px",
        color: "#08fdd8",
        [theme.breakpoints.down("xs")]: {
            fontSize: "45px",
        },
    },
    portfolio_text : {
        margin:"0",
        width:"100%",
        fontSize : "1rem",
        lineHeight: "1.5",
        fontFamily: "camphor, Open Sans, Segoe UI, san-serif !important",
        fontWeight: '200px',
        color: "#fff"
    },
    button: {
        marginTop: "16px",
        width: "160px",
        fontSize: "15px",
        color: "#fd2155",
        borderColor: "#fd2155" ,
        cursor: "pointer"    ,
        zIndex: "20" 
    },
    button1: {
        padding:"12px",
        marginLeft:"auto",
        width: "160px",
        fontSize: "15px",
        color: "#08fdd8",
        borderColor: "#08fdd8" ,
        cursor: "pointer"    ,
        zIndex: "20",
        [theme.breakpoints.down("xs")]: {
            padding: "9px",
            fontSize:"10px"
        },
    },
    about_wrapper : {
        width: "90%",
        marginTop:"5rem",
        margin:"auto",
        [theme.breakpoints.down("xs")]: {
            width:"100%"
        }
    },
    margin: {
        margin:"5px 0px"
    },
    form: {
        marginTop:"20px"
    },
    contact_form : {
        width:"100%"
    },
    ellipse_container: {
        [theme.breakpoints.down("xs")]: {
            display: "none",
            visibility:"hidden"
        },
    },
    ellipse_container_inner : {
        position: "absolute",
        width:"33%",
        height: "33%",
        borderRadius:"50%",
        top:"50%",
        left:"50%",
        transform: 'translate(-1%, -50%)',
        margin: "0 auto",
        zIndex:"-1",
        boxShadow: "10px 3px red",
        
    },
    ellipse: {
        position: "absolute",
        top: "0",
        borderRadius: "50%",
        borderStyle:"solid",
        // backgroundColor:"red"
    },
    thin : {
        width: "100%",
        height: "100%",
        borderWidth: "1px",
        opacity: ".5",
        borderColor:"#494949"
    },
    thick : {
       width:"93%",
       height: "93%",
       borderWidth: "10px",
       borderColor: "#47a2a7",
       transform : "rotate(-45deg)",
       top: "12px",
       left: "12px",
    //    boxShadow: "3px 10px #08fdd8",
       animation : "$ellipseRotateleft 12s ease-in-out infinite",
    },
    node : {
           top: "0%",
           display:"flex",
           width:"100%",
           height:"100%",
           justifyContent:"center",
           alignItems:"center",
           position:"absolute",
           left:"0px",
        //    backgroundColor: "#962247b8",
            boxShadow:" rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
    },
    yellow : {
        width:"93%",
        height: "93%",
        borderWidth: "10px",
        borderColor: " #fd2155",
        transform : "rotate(45deg)",
        top: "12px",
        left: "12px",
        animation : "$ellipseRotate 12s ease-in-out infinite"
    },
    "@keyframes ellipseRotate":{
        from: { transform: "rotate(-45deg)"},
        to: {  transform: "rotate(-405deg)"}
    },
    "@keyframes ellipseRotateleft":{
        from: { transform: "rotate(45deg)"},
        to: {  transform: "rotate(405deg)"}
    }     
}))

const CssTextField = withStyles({
    root: {
        backgroundColor:"#2b2b2b",
        width: "100%",
        paddifng:"10px",
      '& label.Mui-focused': {
        color: '#08fdd8',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#08fdd8',
      },
      '& .MuiInput-underline': {
        "&:hover": {
            borderBottomColor: '#08fdd8',
        }
    },
      '& .MuiInput-underline:before': {
        borderBottomColor: '',
      },
      "& .MuiFormLabel-root": {
            fontSize: "16px",
            fontFamily: "camphor",
            fontWeight:"400",
            color:"#84808057",
            paddingLeft:"10px"
      },
      '& .MuiInputBase-input': {
        color:"#fff",
        padding:"6px 10px",
        fontSize:"15px",
        fontFamily:"camphor",
        fontWeight:"100px"
      },
    },
  })(TextField);

const Profile = (props) => {
    const classes = useStyles()
    const container = useRef()
    const profile = useRef(null)
    const work = useRef(null)
    const grid = useRef(null)
    const root = useRef(null)

    let tl = new TimelineLite({delay:0.8});

    useEffect(() => {
        const hfirst = profile.current.children[0].children[0];
        const hsecond = hfirst.nextSibling;
        const hthird = hsecond.nextSibling;
        const contentP = profile.current.children[1]
        const contentBtn = profile.current.children[2]
        // work
        const work_header = work.current.children[0]
        const work_overlay = work_header.nextSibling;
        const work_text = work_overlay.nextSibling.children[0];
        const work_btn = work_text.nextSibling;
        // grid
        const gFirst = grid.current.children[0];
        const gSecond = gFirst.nextSibling;
        const gThird = gSecond.nextSibling;
        const gFourth = gThird.nextSibling;
        const gFifth = gFourth.nextSibling;
        const gSixth = gFifth.nextSibling;
        const gSeventh = gSixth.nextSibling;
        const gEigth = gSeventh.nextSibling;
        console.log(gFirst.children,gSecond.children,gThird.children);
        new hoverEffect({
            parent : container.current,
            intensity: 0.3,
            image1: bg3,
            image2: bg7,
            displacementImage:"https://raw.githubusercontent.com/robin-dela/hover-effect/master/images/fluid.jpg"
        })

        TweenMax.to(root.current ,0 ,{css: {visibility:"visible"}})

        tl.from([hfirst.children, hsecond.children[0],hthird.children] ,{
            y:100,
            opacity:0,
            duration:.8,
            ease: Power3.easeIn,
            stagger: {
                amount: .2
            }
        })
        .from([contentP.children, contentBtn.children], {
            y:-100,
            opacity:0,
            duration:.8,
            ease: Power3.easeIn,
            stagger: {
                amount: .2
            }
        }).from([work_header, work_text.children, work_btn.children], {
            y:100,
            opacity:0,
            duration:1,
            ease:Power4.easeOut,
            stagger: {
                amount:.2
            }
        }).from([gFirst.children,gSecond.children,gThird.children, gFourth.children, gFifth.children,gSixth.children,gSeventh.children,gEigth.children],{
            y:100,
            opacity:0,
            duration:.8,
            ease:Power3.easeIn,
            stagger: {
                amount:.5
            }
        })
    })
    return (
        <>
            <div className={classes.root} ref={root}>
                <section id="Home">
                    <div className={classes.container}>
                        <div className={classes.details}>
                            <div className={classes.details_inner}>
                                <div className={classes.ellipse_container}>
                                    <div className={classes.ellipse_container_inner}>
                                        <div className={[classes.ellipse, classes.thin].join(' ')}></div>
                                        <div className={[classes.ellipse, classes.thick].join(' ')}> 
                                            
                                        </div>
                                        <div className={classes.node}>
                                        <span>
                                            <img src={Img} style={{width:"60px", padding:"10px",borderRadius:"50%", backgroundColor:"#3d5c66cc"}}/>
                                        </span>
                                        </div>
                                        <div className={[classes.ellipse, classes.yellow].join(' ')}></div>
                                    </div>
                                </div>
                                <div style={{width:"100%"}} ref={profile}> 
                                    <div className={classes.font} >

                                        <h3>    
                                            <span className={classes.emoji_container}>Hi,
                                                <span className={classes.emoji}>👋</span>
                                            </span>
                                        </h3> 
                                        <h3><span>I’m Peter,</span></h3>
                                        <h3><span>web developer.</span></h3>
                                    </div>
                                    <div className={classes.title}>
                                        <span>A passionate Front-end developer / UI/UX Designer</span>
                                    </div>
                                    <div className={classes.contact_btn}>
                                        <span><Button className={classes.button} variant="outlined">
                                            CONTACT ME
                                        </Button></span>
                                    </div>
                                </div>
                                {/* <div style={{width: "35%"}}> */}
                                    {/* <img src={jblue} style={{height:"40rem"}}/> */}
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                </section>
                 <Container maxWidth="lg"  style={{width:'100%', overflow:'hidden', marginTop:"3rem"}}>
                    <section id="Work">
                        <div className={classes.portfolio_wrapper}>
                            <div className={classes.portfolio_wrapper_inner} ref={work}>
                                <div className={classes.portfolio_Header}>
                                    My Portfolio`
                                </div>
                                <div className={classes.portfolio_underlay}>
                                    Work
                                </div>
                                <Grid container alignItems="flex-end" spacing={2} style={{marginTop:"1rem"}}>
                                    <Grid item  xs={12} sm={12} md={10}>
                                        <div className={classes.portfolio_text}>
                                            <span>
                                                A small gallery of recent projects chosen by me. I've done them all 
                                                using various javascript frameworks E.g React, Vue, Node etc.                                                A small gallery of recent projects chosen by me. I've done them all 
                                                using various javascript frameworks E.g React, Vue, Node etc. {/*<br/> */} 
                                            </span>
                                        </div>
                                    </Grid>
                                    <Grid item  xs={12} sm={12} md={2}>
                                        <div style={{display:"flex", width:'100%', flexDirection:"row"}}>
                                            <Button className={classes.button1} variant="outlined">
                                                See more
                                            </Button>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                            <div style={{marginTop:"5rem"}}>
                                <Grid container spacing={1} style={{height:"max-content"}} ref={grid}>
                                   {
                                       datas.map((data,index) => {
                                            return (
                                                <Grid key={index} item xs={12} sm={6} md={4}>
                                                    <Card details={data}></Card>
                                                </Grid>
                                            )
                                       })
                                   }
                                    <Grid item xs={12} sm={6} md={4}>
                                        <div className={classes.card}>
                                            <img src={bg2} className={classes.card_img} style={{width:"100%"}}></img>
                                            {/* <div className={classes.card_overlay}>
                                            </div> */}
                                            <span className={classes.card__rect}></span>
                                            <span className={classes.card__tri}></span>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={4}>
                                        <div className={classes.card}>
                                            <img src={bg3} className={classes.card_img} style={{width:"100%"}}></img>
                                            {/* <div className={classes.card_overlay}>
                                            </div> */}
                                            <span className={classes.card__rect}></span>
                                            <span className={classes.card__tri}></span>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={4}>
                                        <div className={classes.card}>
                                            <img src={bg4} className={classes.card_img} style={{width:"100%"}}></img>
                                            {/* <div className={classes.card_overlay}>
                                            </div> */}
                                            <span className={classes.card__rect}></span>
                                            <span className={classes.card__tri}></span>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={4}>
                                        <div className={classes.card}>
                                            <img src={bg5} className={classes.card_img} style={{width:"100%"}}></img>
                                            {/* <div className={classes.card_overlay}>
                                            </div> */}
                                            <span className={classes.card__rect}></span>
                                            <span className={classes.card__tri}></span>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={4}>
                                        <div className={classes.card}>
                                            <img src={bg6} className={classes.card_img} style={{width:"100%"}}></img>
                                            {/* <div className={classes.card_overlay}>
                                            </div> */}
                                            <span className={classes.card__rect}></span>
                                            <span className={classes.card__tri}></span>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={4}>
                                        <div className={classes.card}>
                                            <img src={bg7} className={classes.card_img} style={{width:"100%"}}></img>
                                            {/* <div className={classes.card_overlay}>
                                            </div> */}
                                            <span className={classes.card__rect}></span>
                                            <span className={classes.card__tri}></span>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={4}>
                                        <div className={classes.card}>
                                            <img src={bg8} className={classes.card_img} style={{width:"100%"}}></img>
                                            {/* <div className={classes.card_overlay}>
                                            </div> */}
                                            <span className={classes.card__rect}></span>
                                            <span className={classes.card__tri}></span>
                                        </div>
                                    </Grid>
                                    
                                </Grid>
                            </div>
                        </div>
                    </section>
                     <section className={classes.about_wrapper} id="Profile">
                        <div className={classes.about_wrapper_inner}>
                            <div className={classes.portfolio_Header}>
                                Me, Myself and I`
                            </div>
                            <div style={{marginTop:"1rem"}}>
                                <Grid container spacing={4}>
                                    <Grid item md={7}>
                                        <p className={classes.portfolio_text} >
                                        I’m Peter , a 23 years old self-taught Front-end developer.
                                        I passionately combine good design, technology, and innovation in all my projects, 
                                        which I like to accompany from the first idea to release. Currently, I'm focused 
                                        on the development of responsive user interfaces with React and I'm interested in 
                                        JavaScript, Web Technologies, User Experience, 
                                        Accessibility, Clean Code, and the Universe. And everything in between<br/>
                                        <br/><br/>
                                        When I am not writing code I love to spend time with my wife and 3 year old daughter at 
                                        home in London or travelling around the world. We are quite a multi-cultural family with
                                         me having grown up in Germany 🇩🇪 and my wife being from Mexico 🇲🇽, which is why we raise 
                                         our daughter trilingual. I myself speak five languages (some better than others). 
                                        Furthermore I enjoy cooking fresh food when I come home after a long day at the office.
                                        </p>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                     </section>
                    
                    <section className={classes.about_wrapper} id="About">
                        <Grid container spacing={4}>
                            <Grid item md={6}>
                                <div className={classes.portfolio_Header}>
                                    Contact me`
                                </div >
                                <div className={classes.portfolio_text} style={{marginTop:"1rem"}}>
                                    I’m interested in freelance opportunities – especially ambitious or large projects. However, if you have other request or question, don’t hesitate to use the form.
                                </div>
                                <form autoComplete="off" className={classes.form}>
                                    <Grid container spacing={1}> 
                                        <Grid item md={6} sm={6} xs={6}>
                                            <CssTextField className={classes.margin} size="small" id="custom-css-standard-input" label="Name" />
                                        </Grid>
                                        <Grid item md={6} sm={6} xs={6}>
                                            <CssTextField className={classes.margin} size="small" id="custom-css-standard-input" label="E-mail" />
                                        </Grid>
                                    </Grid>
                                    <CssTextField className={classes.margin} size="small" id="custom-css-standard-input" label="Subject" />
                                    <CssTextField className={classes.margin} multiline rows={5} size="small" id="custom-css-standard-input" label="Message" />
                                </form>   
                            </Grid>
                            <Grid item md={6}>
                                <img src={map} style={{width:"100%"}}></img>
                            </Grid>
                        </Grid>
                        <div className={classes.contact_form}>
                            
                        </div>
                    </section>
               </Container>
                <div  style={{position: "absolute", top: "0", zIndex: "", right:"0", height: "100vh", width: "100%"}}>
                <Particles
                height="91vh"
                width="100%"
                    params={{
                        "particles": {
                            "number": {
                                "value": 150,
                                "density": {
                                    "enable": true,
                                    "value_area": 1803.4120608655228
                                }
                            },
                            "color": {
                                "value": "#ffffff"
                            },
                            "shape": {
                                "type": "circle",
                                "stroke": {
                                    "width": 2,
                                    "color": "#000000"
                                },
                                "polygon": {
                                    "nb_sides": 4
                                },
                                "image": {
                                    "src": "img/github.svg",
                                    "width": 100,
                                    "height": 100
                                }
                            },
                            "opacity": {
                                "value": 0.4008530152163807,
                                "random": false,
                                "anim": {
                                    "enable": false,
                                    "speed": 1,
                                    "opacity_min": 0.1,
                                    "sync": false
                                }
                            },
                            "size": {
                                "value": 1.5,
                                "random": true,
                                "anim": {
                                    "enable": false,
                                    "speed": 40,
                                    "size_min": 0.1,
                                    "sync": false
                                }
                            },
                            "line_linked": {
                                "enable": true,
                                "distance": 0,
                                "color": "#ffffff",
                                "opacity": 0.3687847739990702,
                                "width": 0.6413648243462091
                            },
                            "move": {
                                "enable": true,
                                "speed": 6,
                                "direction": "none",
                                "random": false,
                                "straight": false,
                                "out_mode": "out",
                                "bounce": false,
                                "attract": {
                                    "enable": false,
                                    "rotateX": 600,
                                    "rotateY": 1200
                                }
                            }
                        },
                        "interactivity": {
                            "detect_on": "window",
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "repulse"
                                },
                                "onclick": {
                                    "enable": false,
                                    "mode": "bubble"
                                },
                                "resize": true
                            },
                            "modes": {
                                "grab": {
                                    "distance": 400,
                                    "line_linked": {
                                        "opacity": 1
                                    }
                                },
                                "bubble": {
                                    "distance": 400,
                                    "size": 40,
                                    "duration": 2,
                                    "opacity": 8,
                                    "speed": 3
                                },
                                "repulse": {
                                    "distance": 100,
                                    "duration": 0.4
                                },
                                "push": {
                                    "particles_nb": 4
                                },
                                "remove": {
                                    "particles_nb": 2
                                }
                            }
                        },
                        "retina_detect": true
                    }}
                /> 
                </div>
            </div> 
        </>
    )
}

export default Profile