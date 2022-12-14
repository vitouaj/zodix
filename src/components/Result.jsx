import React from "react";
import Row from "./Row";
import Textbox from "./Textbox";

export default function Result(props) {
    const data = props.fetchedData
    return (
        <React.Fragment>
            <Textbox content={data.description}/>
            <table className="w-1/2 rounded shadow-xl mx-auto my-8 py-4 px-4 border border-gray-200 h-36">
                <tbody className="w-full">
                    <Row head="Color" content={data.color}/>
                    <Row head="Current Date" content={data.current_date}/>
                    <Row head="Date Range" content={data.date_range}/>
                    <Row head="Lucky Number" content={data.lucky_number}/>
                    <Row head="Lucky Time" content={data.lucky_time}/>
                    <Row head="Mood" content={data.mood}/>
                </tbody>
            </table>
        </React.Fragment>
    )
}