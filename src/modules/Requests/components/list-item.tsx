/// <reference path="../../../@types/become-doctor.d.ts" />

import React from "react";
import { observer } from "mobx-react";
import { requests } from "../../../translation";
import store from "../store";
import { Chevron, BookmarkIcon } from "../icons";

export enum BecomeDoctorFields {
    name = "name",
    surname = "surname",
    phone = "phone",
    email = "email",
    password = "password",
    education = "education",
    speciality = "speciality",
    yearEducation = "yearEducation",
    blankSeries = "blankSeries",
    blankNumber = "blankNumber",
    issueDate = "issueDate",
    passportIssuedByWhom = "passportIssuedByWhom",
    passportSeries = "passportSeries",
    passportIssueDate = "passportIssueDate",
    workExperience = "workExperience",
    workPlaces = "workPlaces",
}


type Props = {

    i: number,
}

const formatDate = (date: Date): string => {
    let month = date.getMonth().toString();
    let day = date.getDate().toString();

    if (month.length === 1) {
        month = "0" + month;
    }

    if (day.length === 1) {
        day = "0" + day;
    }

    return `${day}.${month}.${date.getFullYear()}`;
}

const Item: React.FC<Props> = (props) => {

    const keys = Object.keys(BecomeDoctorFields);
    const firstColumnKeys = keys.slice(0, 8);
    const secondColumnKeys = keys.slice(9, 16);

    // console.log(store.requests[props.i].issueDate);

    // if (typeof store.requests[props.i].issueDate === 'string') {
    //     if (store.requests[props.i].issueDate?.toString().length ?? 1 >= 12) {
    //         store.requests[props.i].issueDate = formatDate(new Date(store.requests[props.i].issueDate ?? ""));
    //     }
    // }



    return <div className="item">
        <div className="index">{props.i + 1}</div>
        <div className="content">
            <div className="short">
                {store.requests[props.i].name}
                &nbsp;
                {store.requests[props.i].surname}
            </div>
            <div className={`collapsed ${store.isRequestOpen[props.i] ? "open" : ""}`}>
                <div className="info">
                    <div className="column">
                        {
                            firstColumnKeys.map(key => {
                                return <div className="row" >
                                    <div className="field" id={key + "-field"} >
                                        {/* @ts-ignore */}
                                        {requests[key] ?? ""}:
                            </div>
                                    <div className="value" id={key + "-value"} >
                                        {/* @ts-ignore */}
                                        {store.requests[props.i][key]}
                                    </div>
                                </div>
                            })
                        }
                    </div>
                    <div className="column">
                        {
                            secondColumnKeys.map(key => {
                                return <div className="row" >
                                    <div className="field" id={key + "-field"} >
                                        {/* @ts-ignore */}
                                        {requests[key] ?? ""}:
                            </div>
                                    <div className="value" id={key + "-value"}>
                                        {/* @ts-ignore */}
                                        {store.requests[props.i][key].toString()}
                                    </div>
                                </div>
                            })
                        }
                    </div>

                </div>
                <div className="buttons">
                    <button id="bookmark" className="square" onClick={() => store.triggerBookRequest(props.i)}>
                        <BookmarkIcon booked={store.isRequestBookes[props.i]} />
                    </button>
                    <button id="remove">{requests.remove}</button>
                    <button id="submit">{requests.submit}</button>
                </div>
            </div>

        </div >
        <button id="collapse" className={store.isRequestOpen[props.i] ? "open" : ""} onClick={() => store.triggerRequestOpenOrClose(props.i)}>
            <Chevron />
        </button>
    </div >
}

export default observer(Item);