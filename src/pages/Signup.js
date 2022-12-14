/** @format */

import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [birthday, setBirthday] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault();
    const res = await axios({
      url: "/user",
      method: "post",
      data: {
        username,
        birthday,
        email,
        password,
      },
    });
    console.log(res);
    navigate("/login");
  }

  return (
    <form className="max-w-lg mx-auto shadow-lg px-8 pb-8 mt-10">
      <div className="my-2">
        <lable
          className="block mb-2 text-sm font-medium text-gray-900"
          htmlFor="username"
        >
          Username
        </lable>
        <input
          className="shadow-sm  border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="my-2">
        <lable
          className="block mb-2 text-sm font-medium text-gray-900"
          htmlFor="email"
        >
          Email
        </lable>
        <input
          className="shadow-sm  border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="my-2">
        <lable
          className="block mb-2 text-sm font-medium text-gray-900"
          htmlFor="date"
        >
          Birthday
        </lable>
        <input
          className="shadow-sm  border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          type="date"
          id="date"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
        />
      </div>
      <div className="my-2">
        <lable
          className="block mb-2 text-sm font-medium text-gray-900"
          htmlFor="password"
        >
          Password
        </lable>
        <input
          className="shadow-sm  border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="flex justify-center ">
        <button
          onClick={handleRegister}
          className="bg-sky-500 px-4 py-2 hover:bg-sky-400"
        >
          Register
        </button>
      </div>
    </form>
  );
}
