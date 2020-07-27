import React from "react";
import { appLogo } from "../../settings";
import { login } from "../../translation";
import store from "../../store";

import "./login.scss";

const Login: React.FC = () => {
    return <React.Fragment>

        {
            store.isLogin()
                ? <div className="container">
                    <div className="logo">
                        <img src={appLogo} alt="logo" />
                    </div>
                    <h1>{login.alreadyLogIn}@{store.username}</h1>
                    <div className="row">

                        <button className="bordered" >{login.logout}</button>
                        <button>{login.goBack}</button>
                    </div>
                </div>
                : <div className="container">
                    <div className="logo">
                        <img src={appLogo} alt="logo" />
                    </div>
                    <h1>{login.adminPanel}</h1>
                    <input type="username" id="username" placeholder={login.username} />
                    <input type="password" id="username" placeholder={login.password} />
                    <button>{login.login}</button>
                </div>

        }

        <div className="powered-by">
            powered by <a href="https://github.com/zotovY/superadmin">superadmin</a>, created by <a href="https://github.com/zotovY">@zotovY</a>
        </div>

    </React.Fragment>
}

export default Login;