import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login(props) {
  const navigate = useNavigate()

  const [show, setShow] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('')

  async function handleLogin(e) {
    e.preventDefault()
    try {
      const res = await axios({
        url: '/auth',
        method: 'post',
        data: {
            email,
            password
        }
      })
      if (res.status !== 200) {
        setMsg(res.response.data)
      } else {
        props.setIsLogin()
        localStorage.setItem('zodix_token_key', res.headers.token_key)
        navigate('/')
      }
    } catch (e) {
      setMsg(e.response.data)
    } 
  }
  
  return (
    <form className='max-w-lg mx-auto shadow-lg px-8 pb-8 mt-10'>
            {msg && <h5 className="text-sm font-medium text-red-500">{msg}</h5>}
            <div className='my-2'>
                <lable className="block mb-2 text-sm font-medium text-gray-900" htmlFor="username">Email</lable>
                <input 
                    className='shadow-sm  border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' 
                    type="text" 
                    id='email'
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    />
            </div>
            <div className='my-2'>
                <lable className="block mb-2 text-sm font-medium text-gray-900" htmlFor="email">Password</lable>
                <input 
                    className='shadow-sm  border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' 
                    type={ show ? 'text' : 'password'}
                    id='password'
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                    />
                  <a className="mt-1 text-sm text-gray-900 cursor-pointer" onClick={()=>setShow(!show)}>show password</a>
            </div>
            <div className='flex justify-center '>
                <button onClick={handleLogin} className='bg-sky-500 px-4 py-2 hover:bg-sky-400'>Login</button>
            </div>
    </form>
  )
}