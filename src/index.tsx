import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProtectedRoute from 'react-protected-route-component'
import App from "./App";
import Login from "./modules/Login/Login";

ReactDOM.render(
    <Router>
        <Switch>
            <ProtectedRoute path="/admin" redirectRoute="/admin-login" guardFunction={() => {
                const token = localStorage.getItem('uid');
                if (token) {
                    return true;
                } else {

                }
            }} component={() => <App />} />
            <Route path="/admin-login" exact>
                <Login />
            </Route>
        </Switch>
    </Router>, document.getElementById("root")
);