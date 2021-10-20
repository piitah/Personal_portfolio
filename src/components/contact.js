import React  from "react";
import { makeStyles, withStyles } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import map from "../assets/Nig.jpg"
import { Button } from "@material-ui/core";
import emailjs from 'emailjs-com'
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2'

const useStyles = makeStyles((theme) => ({
    Contact_Header : {
        fontSize : "80px",
        fontFamily: "xyz !important",
        fontWeight: "600px",
        color: "#08fdd8",
        [theme.breakpoints.down("xs")]: {
            fontSize: "45px",
        },
    },
    Contact_text : {
        margin:"0",
        width:"100%",
        fontSize : "14px",
        lineHeight: "1.5",
        fontFamily: "camphor, Open Sans, Segoe UI, san-serif !important",
        fontWeight: '200px',
        color: "#fff"
    },
    margin: {
        margin:"5px 0px",
        position : "relative"
    },
    form: {
        marginTop:"20px"
    },
    button: {
        marginTop: "16px",
        width: "160px",
        padding:"12px 13px",
        fontSize: "15px",
        color: "#08fdd8",
        borderColor: "#08fdd8" ,
        cursor: "pointer"    ,
        zIndex: "20",
        float:"right"
    },
    overlay: {
        width:"100%",
        height:"100%",
        backgroundImage: `linear-gradient( to right bottom, 
            rgba(8, 253, 216, 0.18), 
            rgba(253, 33, 85, 0.23))`, 
        position:"absolute",
        top:"0",
        left:"0"
    },
    errorMsg_wrapper: {
        color:"#fd2155",
        fontSize: "12px",
    },
    errorMsg : {
        color:"red",
        fontSize:"0.8rem",
        fontFamily: "400",
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
        color:"#f0eded",
        padding:"6px 10px",
        fontSize:"15px",
        fontFamily:"camphor",
        fontWeight:"100px"
      },
    },
  })(TextField);

const Contact = (props) => {
    const classes = useStyles()
    const { register, handleSubmit,reset, formState: { errors } } = useForm();

    // variables
    // const [inputs, setInputs] = useState({
    //     Name : "",
    //     Email : "",
    //     Subject : "",
    //     Message : ""
    // })

    // const handleInputChange = (event) => {
    //     event.persist();
    //     setInputs(inputs => ({
    //             ...inputs,
    //             [event.target.name] :event.target.value,
    //     }))
    // }
    
    const onSubmit = (data) => {
        console.log(data)
        const serviceId = 'service_bos76ms';
        const templateId = 'template_6u4j72p';
        const userId = 'user_VeltVUOKXWhh244xxw5vY';
        
        let templateParams = {
            from_name : data.Name,
            email : data.Email,
            message : data.Message,
            subject : data.Subject
        };
            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(
                    response => console.log(response),
                    Swal.fire(
                        'Thanks for reaching out!',
                        'Press ok to close!',
                        'success'
                      )
                )
                .then(error => console.log(error));
                
                reset()
    }

    return (
        <React.Fragment>
            <div className={classes.root}>
                <Grid container spacing={4}>
                    <Grid item md={6}>
                        <div className={classes.Contact_Header}>
                            Contact me`
                        </div >
                        <div className={classes.Contact_text} style={{marginTop:"1rem"}}>
                            {/* I’m interested in freelance opportunities – especially ambitious or large projects. However, if you have other request or question, don’t hesitate to use the form. */}
                            If you have an application you are interested in developing that you need built or a project that needs coding. I'd love to help with it.
                        </div>
                        <form autoComplete="on" onSubmit={handleSubmit(onSubmit)} className={classes.form}>
                            <Grid container spacing={1}> 
                                <Grid item md={6} sm={6} xs={6}>
                                    <div style={{position:"relative"}}>
                                        <CssTextField className={classes.margin} size="small" name="Name"  type="text" label="Name" 
                                            {...register('Name', { required: true })}
                                        />
                                        {errors.Name && errors.Name.type === "required" && (
                                            <div className={classes.errorMsg_wrapper}>
                                                    *Name is required.
                                            </div>
                                        )}
                                    </div>
                                </Grid>
                                <Grid item md={6} sm={6} xs={6}>
                                    <div style={{position:"relative"}}>
                                        <CssTextField className={classes.margin}  size="small" name="Email"  label="E-mail" type="email" 
                                            {...register('Email', { 
                                                required: true , 
                                                pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
                                            })} 
                                        />
            
                                        {errors.Email && errors.Email.type === "required" && (
                                            <div className={classes.errorMsg_wrapper}>
                                                 *Email address is required.
                                            </div>
                                        )}
                                        {errors.Email && errors.Email.type === "pattern" && (
                                            <div className={classes.errorMsg_wrapper}>
                                                *Email address is not valid.
                                            </div>
                                        )}
                                    </div>
                                </Grid>
                            </Grid>
                            <div style={{position:"relative"}}>
                                <CssTextField className={classes.margin} size="small" name="Subject" id="custom-css-standard-input" label="Subject" type="text" 
                                    {...register('Subject', { required: true })}
                                />
                                {errors.Subject && errors.Subject.type === "required" && (
                                    <div className={classes.errorMsg_wrapper}>
                                            *Subject is required.
                                    </div>
                                )}
                            </div>
                            <CssTextField className={classes.margin} multiline rows={5} name="Message" size="small" id="custom-css-standard-input" label="Message"
                                {...register('Message', { required: true })}
                            />
                            {errors.Message && errors.Message.type === "required" && (
                                    <div className={classes.errorMsg_wrapper}>
                                            *Message is required.
                                    </div>
                                )}
                            <Button className={classes.button} type="submit" variant="outlined">Contact Me</Button>
                        </form>   
                    </Grid>
                    <Grid item md={6} style={{position:"relative"}}>
                        <div className={classes.overlay}>
                            &nbsp;
                        </div>
                        <img src={map} alt="" style={{width:"100%", height:"100%"}}></img>
                    </Grid>
                </Grid>
                <div className={classes.contact_form}>
                    
                </div>
            </div>
        </React.Fragment>
    )
}

export default Contact