import React from "react";
import logo from '../images/logo.png'

const Fot = () => {
    return (
        <footer className="bg-sky-500 bottom-0 m-0">
            <a href="#" className="flex ml-4 pt-2">
                <img className="w-10" src={logo}/>
                <p className="mt-1 text-white font-bold">ZodiX</p>
            </a>

            <div className="flex justify-center p-2">
                <ul className="md:flex text-white">
                    <li className="py-2 mx-4">
                        <a href='#' >About</a>
                    </li>
                    <li className="py-2 mx-4">
                        <a href='#'>Privacy Policy</a>
                    </li>
                    <li className="py-2 mx-4">
                        <a href='#'>Licensing</a>
                    </li>
                    <li className="py-2 mx-4">
                        <a href='#'>Contact</a>
                    </li>
                </ul>
            </div>
        
            <hr className="m-4"/>

            <div className="flex justify-center pb-4">
                <p className="justify-center text-white font-bold">Zodix™</p>
                <p className="text-white">All Right Reserved.</p>
            </div>
        </footer>
    )
}

export default Fot;