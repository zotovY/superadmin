import React from "react";
import { observer } from "mobx-react";
import Topbar from "./components/topbar";
import List from "./components/list";
import Grid from "./components/grid";
import store from "./store";


const Routes: React.FC = () => {
    return <div className="page" id="requests">
        <Topbar />

        {
            store.isListView ? <List /> : <Grid />
        }


    </div>
}

export default observer(Routes);