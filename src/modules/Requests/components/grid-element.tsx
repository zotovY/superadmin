import React from "react";
import { observer } from "mobx-react";
import store from "../store";
import { BecomeDoctorFields } from "./list-item";
import { requests } from "../../../translation";
import { BookmarkIcon } from "../icons";

type Props = {
    i: number
}

const GridElement: React.FC<Props> = ({ i }: Props) => {
    return <div className="card">
        <div className="uprow">
            <div className="left">
                <div className="index">{i + 1}</div>
                <div className="short">{store.requests[i].name}&nbsp;{store.requests[i].surname}</div>
            </div>
            <button id="bookmark" onClick={() => store.triggerBookRequest(i)}>
                <BookmarkIcon booked={store.isRequestBookes[i]} />
            </button>
        </div>
        <div className="info">
            {
                Object.keys(BecomeDoctorFields).map(key => <div className="row">
                    <div className="field">
                        {/* @ts-ignore */}
                        {requests[key]}
                    </div>
                    <div className="value">
                        {/* @ts-ignore */}
                        {store.requests[i][key]}
                    </div>
                </div>)
            }
        </div>
        <div className="buttons">
            <button id="remove">{requests.remove}</button>
            <button id="submit">{requests.submit}</button>
        </div>
    </div>
}

export default observer(GridElement);