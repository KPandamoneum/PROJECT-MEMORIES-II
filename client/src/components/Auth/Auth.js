import React, { useState, useEffect } from "react";
import { Paper, Avatar, Grid, Typography, Container, Button } from "@material-ui/core";
import { GoogleLogin } from "@react-oauth/google";

import Icon from "./icon";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import useStyles from "./styles";
import Input from "./Input";

const Auth = () => {
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword );

    const handleSubmit = () => {
        
    };

    const handleChange = () => {
        
    };

    const switchMode = () => {
        setIsSignUp((prevIsSignUp) => !prevIsSignUp);
        handleShowPassword(false);
    };

    const googleSuccess = async (res) => {
        console.log(res);
    };

    const googleFailure = (error) => {
        console.log(error);
        console.log("Google Sign In was unsuccessful! Try Again Later.");
    };

    // function handleCallbackResponse (res) {
    //     console.log("Encoded JWT ID Token: " + res.credential);
    // };

    // useEffect(() => {
    //     /*global google*/
    //     google.accounts.id.initialize({
    //         client_id: "255220401517-5u3phkc337m21it17r3j9qekj22rfefr.apps.googleusercontent.com",
    //         callback: handleCallbackResponse
    //     })

    //     google.accounts.rederButton(
    //         document.getElementsById("gSignInDiv"),
    //         { theme: "outlined", size: "large" }
    //     );

    // }, []);

    return (
        <Container component = "main" maxWidth = "xs">
            <Paper className = {classes.paper} elevation = {3}>
                <Avatar className = {classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant = "h5">{isSignUp ? "Sign Up" : "Sign In"}</Typography>
                <form className = {classes.form} onSubmit = {handleSubmit}>
                    <Grid container spacing = {2}>
                        { isSignUp && (
                            <>
                                <Input name = "firstName" label = "First Name" handleChange = {handleChange} autoFocus half />
                                <Input name = "lastName" label = "Last Name" handleChange = {handleChange} half />
                            </>
                        ) }
                        <Input name = "email" label = "Email Address" handleChange = {handleChange} type = "email" />
                        <Input name = "password" label = "Password" handleChange = {handleChange} type = {showPassword ? "text" : "password"} handleShowPassword = {handleShowPassword} />
                        { isSignUp && <Input name = "confirmPassword" label = "Repeat Password" handleChange = {handleChange} type = "password" /> }
                    </Grid>
                    <Button type = "submit" fullWidth variant = "contained" color = "primary" className = {classes.submit}>
                        { isSignUp ? "Sign Up" : "Sign In"  }
                    </Button>
                    {/* <GoogleLogin 
                        clientId = "255220401517-5u3phkc337m21it17r3j9qekj22rfefr.apps.googleusercontent.com"
                        render = {(renderProps) => (
                            <Button className = {classes.googleButton} color = "primary" fullWidth onClick = {renderProps.onClick} disabled = {renderProps.disabled} startIcon = {<Icon />} variant = "contained">
                                Google Sign In
                            </Button>
                        )}
                        onSuccess = {googleSuccess}
                        onFailure = {googleFailure}
                        cookiePolicy = "single_host_origin"
                    /> */}
                    <GoogleLogin
                        onSuccess={credentialResponse => {
                            console.log(credentialResponse);
                        }}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                    /> 
                    <Grid container justify = "flex-end">
                        <Grid item >
                            <Button onClick = {switchMode}>
                                { isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up" }
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
};

export default Auth; 