import React from "react";
import Topbar from "./components/topbar";
import List from "./components/list";



const Routes: React.FC = () => {
    return <div className="page" id="requests">
        <Topbar />
        <List />
    </div>
}

export default Routes;