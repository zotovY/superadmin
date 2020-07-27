import React from "react";
import { observer } from "mobx-react";
import store from "../store";
import GridElement from "./grid-element";

const GridView: React.FC = () => {
    return <div className="grid">
        {
            store.requests.map((_, i) => <GridElement key={"grid" + i} i={i} />)
        }
    </div>
}

export default observer(GridView);