import React from "react";
import { observer } from "mobx-react";
import { requests as t } from "../../../translation";
import store from "../store";

import "../routes.scss"
// import { ReactComponent as RefreshIcon } from '../images/refresh.svg';
// import { ReactComponent as ListIcon } from '../images/list.svg';
// import { ReactComponent as GridIcon } from '../images/grid.svg';

import { RefreshIcon, ListIcon, GridIcon, SortIcon, AddIcon } from "../icons";



const Topbar: React.FC = () => {


    return <section id="topbar">
        <div className="mainRow">
            <h1>{t.request}</h1>
            <div className="actions">
                <button className="square" id="refresh">
                    <RefreshIcon />
                </button>
                <div className="divider" />
                <button className={`square ${store.isListView ? "active" : ""}`} id="list" onClick={() => store.setIsListView(true)}>
                    <ListIcon />
                </button>
                <button className={`square ${!store.isListView ? "active" : ""}`} id="grid" onClick={() => store.setIsListView(false)}>
                    <GridIcon />
                </button>
                <button className="wide" id="popularity">
                    <SortIcon />
                    {t.popularity}
                </button>
                <button className="wide" id="add">
                    <AddIcon />
                    {t.add}
                </button>

            </div>
        </div>
        <div className="underline" />
    </section>
}

export default observer(Topbar);