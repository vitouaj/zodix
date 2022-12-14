/** @format */

import React from "react";
import "../index.css";

const Card = (props) => {
  return (
    <div className="m-4 grid place-items-center ">
      <div className="relative">
        <img
          className="w-20 h-20 rounded-full object-cover shadow-sm"
          src=""
          alt="icon-img"
        ></img>
      </div>
      <div className="p-4 grid place-items-center">
        <h2 className="text-xl font-sans font-bold">{props.user.username}</h2>
        <p className="text-sm font-sans text-gray-600">{props.user.birthday}</p>
        <p className="text-sm font-sans text-gray-600">{props.user.email}</p>
      </div>
      <a className="underline text-black" href="/edit">
        Edit profile
      </a>
    </div>
  );
};

export default Card;
