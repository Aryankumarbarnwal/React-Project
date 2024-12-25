import React, { useState } from 'react'

const Login = () => {
    const[email, setEmail] = useState(" ")
    const[password, setPassword] = useState(" ")

    const SubmitHandler=(e)=>{
        e.preventDefault()
        console.log("email is", email)
        console.log("passwrod is ", password)

        setEmail(" ")
        setPassword(" ")
    }

    return (
        <div className='flex min-h-screen items-center justify-center'>

            <div className='w-full border-2 border-red-600 max-w-md p-6'>
                <h2 className='text-2xl font-bold text-center text-gray-700 mb-6'>Login</h2>
                <form 
                onSubmit={(e)=>{
                    SubmitHandler(e)
                }}
                >
                    <div className='flex flex-col m-3 '>
                        <input  
                        value={email}
                        onChange={(e) =>{
                            setEmail(e.target.value)
                        }}
                        className='m-1 bg-transparent w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"' 
                        required type="email" 
                        placeholder='Type Usename/Email' />
                        <input 
                        value={password}
                        onChange={(e) =>{
                            setPassword(e.target.value)
                        }}
                        className='m-1 bg-transparent w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"' 
                        required type="password" 
                        placeholder='Enter your Password' />

                    </div>
                    <div className='m-3.5 flex items-center justify-between mb-4'>
                        <div className='flex items-center'>
                            <input className='m-1 ' type="checkbox" />
                            <label className='mr-2 text-green-500' htmlFor="remember me">Remember me</label>
                        </div>

                        <div className='text-blue-500 text-sm hover:underline'><a href="#">Forgot Password</a></div>
                    </div>
                    <button className='w-full px-3 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"' type='submit'>Log In</button>
                </form>
                <p className='m-2 text-stone-500'>Don't have an account? <a className='text-blue-500 text-sm hover:underline' href="#">Sign Up</a></p>

            </div>
        </div>
    )
}

export default Login