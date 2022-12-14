import React from "react";
import { UserContext } from "../App";
import { useContext } from "react";


const Testprops = (props) => {

    // const sign = useContext(UserContext)[4]


    const sign = props.sign
    console.log(sign)

    return (
        <p>{sign}</p>
    )
}

export default Testprops