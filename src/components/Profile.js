import React, {useRef, useEffect} from "react"
import {makeStyles} from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Particles from 'react-particles-js';
import hoverEffect from "hover-effect" 
import Grid from '@material-ui/core/Grid';
import { Container } from "@material-ui/core";
import Contact from "../components/contact"
import {TweenMax, Power3, Power4, TimelineLite} from "gsap"
import Card from "../components/cards"
import Skills from "../components/skills"
import Footer from "../components/Footer"
import {datas} from "../Data"
// assets
import Img from "../assets/p2.png"
import bg3 from "../assets/bg3.jpg"
import bg7 from "../assets/bg7.jpg"
import space from "../assets/bbgg.jpg"
import linkedin from "../assets/linkedin.svg"
import gmail from "../assets/gmail-icon.svg"
import github from "../assets/github.svg"

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
        fontSize: "16px",
        letterSpacing: "0px",
        color: "#969090",
        width:"80%",
        [theme.breakpoints.down("sm")]: {
            width:"80%"
        },
    },
    title_text: {
        fontFamily:  "Camphor, Open Sans, Segoe UI, san-serif !important",
        fontSize: "16px",
        letterSpacing: "0px",
        color: "#969090",
        width:"90%",
        [theme.breakpoints.down("sm")]: {
            width:"100%",
            fontSize: "13px",
        },
    },
    contact_btn : {
        marginTop : "20px"
    },
    portfolio_wrapper: {
        position:"relative",
        width: "80%",
        margin: "auto",
        zIndex:"20",
        [theme.breakpoints.down("xs")]: {
            width:"90%"
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
        fontSize : "14px",
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
        width: "80%",
        marginTop:"5rem",
        margin:"auto",
        [theme.breakpoints.down("xs")]: {
            width:"80%"
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
    list_wrapper: {
        margin:"0",
        padding:"0",
        listStyle: "none",
        display: "inline-flex"
        
    },
    list_item : {
        textDecoration:"none",
        padding:"0px 28px 0px 0px",
        width:"20px",
        height:"20px",
        cursor:"pointer"
    },
    contact_icon: {
        width:"40px"
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
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop) 

const Profile = (props) => {
    const classes = useStyles()
    const container = useRef()
    const profile = useRef(null)
    const work = useRef(null)
    const grid = useRef(null)
    const root = useRef(null)


    const myRef = useRef(null)
    const executeScroll = () => scrollToRef(myRef)

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
        // console.log(gFirst.children,gSecond.children,gThird.children);
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
                                            <img src={Img} alt="" style={{width:"60px", padding:"10px",borderRadius:"50%", backgroundColor:"#3d5c66cc"}}/>
                                        </span>
                                        </div>
                                        <div className={[classes.ellipse, classes.yellow].join(' ')}></div>
                                    </div>
                                </div>
                                <div style={{width:"100%"}} ref={profile}> 
                                    <div className={classes.font} >

                                        <h3>    
                                            <span className={classes.emoji_container}>Hi,
                                                <span className={classes.emoji} role="img" aria-label="">👋</span>
                                            </span>
                                        </h3> 
                                        <h3><span>I’m Peter,</span></h3>
                                        <h3><span>web developer.</span></h3>
                                    </div>
                                    <div className={classes.title}>
                                        {/* <span>A passionate Front-end developer / UI/UX Designer</span> */}
                                        <div className={classes.title_text}>
                                            I'm a Frontend Developer based in Lagos, NG specializing in building exceptional websites, applications, and everything in between.
                                        </div>
                                    </div>
                                    <div className={classes.contact_btn}>
                                        <div>
                                            <ul className={classes.list_wrapper}>
                                                <li className={classes.list_item}>
                                                    {/* peter */}
                                                    <img src={linkedin} className={classes.contact_icon} alt="Linkedin"></img>
                                                </li>
                                                <li className={classes.list_item}>
                                                    {/* seun */}
                                                    <img src={github} className={classes.contact_icon} alt=""></img>
                                                </li>
                                                <li onClick={executeScroll} className={classes.list_item}>
                                                    {/* seun */}
                                                    <img src={gmail} className={classes.contact_icon} alt=""></img>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* <span>
                                            
                                            <Button onClick={executeScroll} className={classes.button} variant="outlined">
                                                CONTACT ME
                                            </Button>
                                        </span> */}
                                    </div>
                                </div>
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
                                                I enjoy building beautiful, user-friendly websites and web applications. These are small gallery of recent 
                                                projects chosen by me, Look through some of my work and experiences! If you 
                                                like what you see and have a project you need to be coded, don't hesitate to contact me. 
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
                                    <Grid item md={6}>
                                        <p className={classes.portfolio_text} >
                                        The primary area of my interest is Front-end. 
                                        I passionately combine good design, technology, and innovation in all my projects, 
                                        which I like to accompany from the first idea to release. Currently, I'm focused 
                                        on the development of responsive user interfaces with <span style={{color:"#fd2155", fontFamily:"xyz",fontWeight:"400"}}>React</span> and <span style={{color: "#08fdd8", fontFamily:"xyz",fontWeight:"500"}}>Vue</span> and I'm interested in 
                                        JavaScript, Web Technologies, User Experience, 
                                        Accessibility, Clean Code, and the Universe. And everything in between<br/>
                                        <br/><br/>
                                        Currently, I am looking for a position as a front-end or full-stack developer, joining 
                                        an experienced team and contribute to building great products.

                                        {/* When I am not writing code I love to spend time with my wife and 3 year old daughter at 
                                        home in London or travelling around the world. We are quite a multi-cultural family with
                                         me having grown up in Germany 🇩🇪 and my wife being from Mexico 🇲🇽, which is why we raise 
                                         our daughter trilingual. I myself speak five languages (some better than others). 
                                        Furthermore I enjoy cooking fresh food when I come home after a long day at the office. */}
                                        </p>
                                    </Grid>
                                    <Grid item md={6}>
                                            <Skills/>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                     </section>
                    
                    <section ref={myRef} className={classes.about_wrapper} style={{marginBottom:"10px"}} id="About">
                        <Contact/>
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
                <section styles={{width:"100% !important"}}>
                        <Footer></Footer>
                    </section>
            </div> 
        </>
    )
}

export default Profile