import React from "react";
import Card from "../components/Card";

const Profile = (props) => {

    console.log(props.user)

    return (
        <Card user={props.user}/>
    )
}

export default Profile