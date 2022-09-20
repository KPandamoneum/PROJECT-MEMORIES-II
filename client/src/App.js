import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import Navbar from "./components/NavBar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";


const App = () => (
    <GoogleOAuthProvider clientid = "255220401517-5u3phkc337m21it17r3j9qekj22rfefr.apps.googleusercontent.com">
        <BrowserRouter>
            <Container maxidth = "lg">
                <Navbar />
                <Switch>
                    <Route path = "/" exact component = {Home} />
                    <Route path = "/auth" exact component = {Auth} />
                    {/* <GoogleOAuthProvider clientid = "255220401517-5u3phkc337m21it17r3j9qekj22rfefr.apps.googleusercontent.com"><Route path = "/auth" exact component = {Auth} /></GoogleOAuthProvider> */}
                </Switch>
            </Container>
        </BrowserRouter>
    </GoogleOAuthProvider>
);

export default App;
