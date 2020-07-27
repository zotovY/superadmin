import React, { useEffect } from "react";
import { observer } from "mobx-react";
import store from "../store";

import Item from "./list-item";


const List: React.FC = () => {
    return <div className="list">
        {
            store.requests.map((e, i) => <Item i={i} />)
        }
    </div>
}

export default observer(List);