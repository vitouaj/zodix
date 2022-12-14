import React from "react";
import '../index.css';
import logo from '../images/logo.png'
import {useState} from 'react'
import { useNavigate } from "react-router-dom";

const Nav = (props) => {
    const navigate = useNavigate()

    const [btn, setBtn] = useState(true)
    const toggle = () => {
        setBtn(!btn)
    };

    function logout() {
        localStorage.removeItem('zodix_token_key')
        props.setIsLogin(false)
        navigate('/login')
    }

    return (
    <div>
        <nav className="bg-sky-500 py-4">
            <div className="flex justify-between px-4">
                <a href='/' className="font-bold flex items-center">
                    <img className="w-12" src={logo}/>
                    <p className="text-white text-2xl font-sans mb-2 hover:text-gray-200">ZodiX</p>
                </a>
                <div className="navigation">
                    <ul className="md:flex hidden text-white mt-2">
                        { !props.isLogin ? (
                            <li>
                                <a href='/login' className="px-6 hover:text-gray-200">Login</a>
                            </li>
                        ):(
                        <>
                        <li>
                            <a href='/me' className="px-6 hover:text-gray-200">Dashboard</a>
                        </li>
                        <li>
                            <a onClick={logout} className="px-6 cursor-pointer hover:text-gray-200">Logout</a>
                        </li>
                        <li>
                            <a href='/register' className="px-6 hover:text-gray-200">Register</a>
                        </li>
                        </>
                        )}
                    </ul>
                </div>

                <div className="md:hidden flex items-center">
                    <button className="mobile-menu-btn" onClick={toggle}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="btn-img w-10 h-10 border-0 rounded">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
        <div className={btn ? "md:hidden mobile-menu bg-sky-500 w-[35vh] top-13 fixed right-0 h-full z-40 text-white ease-in-out duration-300 translate-x-full" : "md:hidden mobile-menu bg-sky-500 w-[35vh] top-13 fixed right-0 h-full z-40 text-white ease-in-out duration-300 translate-x-0"}>
            <a className="block py-4 px-4" href="/me">Profile</a>
            <a className="block py-2 px-4" href="#">Pricing</a>
            <a href='/auth' className="block py-4 px-4">Auth</a>
            <a href='/register' className="block py-4 px-4">Register</a>
        </div>
    </div> 
    )
}

export default Nav