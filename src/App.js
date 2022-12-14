import React, { useEffect, useState }  from "react";
import {BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import Profile from "./pages/Profile";
import SignUp from "./pages/Signup";
import "./index.css"
import Home from "./pages/Home";
import Login from "./pages/Login";
import DashBoard from "./pages/Dashboard";
import Nav from "./components/Nav";
import axios from "axios";


const App = () => {

    const [isLogin, setIsLogin] = useState(false)
    const [user, setUser] = useState('')

    async function fetchData() {
        const res = await axios({
            url: "/user",
            method: "get",
            data: {},
            headers: {
                token_key: localStorage.getItem('zodix_token_key')
            }
        })
        if (res.status !== 200) {
            window.location('/login')
        } else {
            console.log(res)
            setUser(res.data)
        }
    }

    useEffect(()=> {
        fetchData()
    }, [])


    
    return (
        <Router>
            <Nav isLogin={isLogin} setIsLogin={setIsLogin}/>
                <Routes>
                    <Route path="/" element={<Home isLogin={isLogin}/>}></Route>
                    <Route path="/me" element={<Profile user={user} />}></Route>
                    <Route path="/login" element={<Login setIsLogin={() => setIsLogin(true)}/>}></Route>
                    <Route path="/register" element={<SignUp/>}></Route>
                    <Route path="/dashboard" element={<DashBoard/>}/>
                </Routes>
        </Router>
    )
}

export default App