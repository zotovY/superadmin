import React from "react";
import { Route } from "react-router-dom";
import Routes from "./modules/Requests/Routes";
import "./translation";

// Components
import Bar from "./bar";

import "./index.scss";

const App: React.FC = () => {
    return <React.Fragment>
        <Route path="/admin/" children={<Bar />} />
        <div className="view">
            <Route path="/admin/requests" exact children={<Routes />} />
        </div>

    </React.Fragment>;
}

export default App;