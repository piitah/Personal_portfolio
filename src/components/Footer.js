import React from "react";
import {makeStyles} from "@material-ui/core/styles"


const useStyles = makeStyles((theme) =>({
    root: {
        marginTop:"30px",
        height:"3rem",
        width: "100%",
        backgroundColor:"#0f0c0cd9",
        display:"flex",
        flexDirection: "row",
        justifyContent:"center",
        alignItems:"center"
        
    },
    call: {
        fontSIze : "14px",
        fontFamily:"xyz",
        fontWeight: "500px",
        color:"#999"
    }
    
}))
const Footer = (props) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className={classes.root}>
                <div className={classes.call}>
                    Contact me Via +2348160288767    
                </div>
            </div>
        </React.Fragment>
    )
}

export default Footer