import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import UseSignUp from '../../hooks/UseSignUp'

function Register() {
    const [inputs,setInputs] = useState({
        fullName:"",
        username:"",
        password:"",
        confirmPassword:"",
        gender:""
    })

    const {loading,signup} = UseSignUp()
    const handleSubmit = async(e) =>{
        e.preventDefault();
        await signup(inputs);
    }
  return (
    <div className='flex items-center justify-center py-[2.5rem] bg-[#F1DFF7]'>
        <div className='flex lg:w-2/3 h-[90vh] overflow-hidden rounded-xl'>
            {/* image */}
            <div className='hidden lg:block relative w-1/2'>
                <img className=' w-full h-[90vh]' src="https://i.pinimg.com/736x/0c/c6/bd/0cc6bdb2906e2fca6c4073c634cf4955.jpg" alt="bg" />
                <p className='text-white font-bold absolute top-[16rem] left-4 text-8xl'> Hey There Welcome!</p>
                <img className='absolute top-10 w-[10rem]' src={require('../../assets/logo.png')} alt="" />
            </div>
            {/* details */}
            <div className='lg:w-1/2 bg-white pt-[2rem] flex flex-col pl-[5rem] pr-[3rem] gap-[1rem]'>
                <h1 className='text-5xl font-bold text-[#8551FF]'>Sign Up</h1>
                <p className='font-thin w-[17rem] text-gray-500'>Welcome! Please fill the credentials to create an Account.</p>
                <form className='flex flex-col gap-[0.5rem]' action="submit" onSubmit={handleSubmit}>
                    <label className='text-gray-500 p-1' htmlFor="name">Name</label>
                    <input className='bg-white text-black border-2 p-1 outline-none' value={inputs.fullName} onChange={(e)=>setInputs({...inputs, fullName: e.target.value})} type="text" id="name" placeholder='Enter your name' required/>

                    <label className='text-gray-500 p-1' htmlFor="username">Username</label>
                    <input className='bg-white text-black border-2 p-1 outline-none' value={inputs.username} onChange={(e)=>setInputs({...inputs, username: e.target.value})} type="email" id="username" placeholder='example@gmail.com' required/>
                    
                    <label className='text-gray-500 p-1' htmlFor="gender">Gender</label>
                    <select className='border-2 p-1 outline-none bg-white text-black' id="gender" required
                            value={inputs.gender}
                            onChange={(e) => setInputs({...inputs, gender: e.target.value})}>
                        <option value="" disabled>Select your gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>

                    <label className='text-gray-500 p-1' htmlFor="password">Password</label>
                    <input className='bg-white text-black border-2 p-1 outline-none' value={inputs.password} onChange={(e)=>setInputs({...inputs, password: e.target.value})} type="password" id="password" placeholder='******' required/>

                    <label className='text-gray-500 p-1' htmlFor="confirm-password">Confirm Password</label>
                    <input className='bg-white text-black border-2 p-1 outline-none' value={inputs.confirmPassword} onChange={(e)=>setInputs({...inputs, confirmPassword: e.target.value})} type="password" id="confirm-password" placeholder='******' required/>


                    <button className='submit_button' type="submit" disabled={loading}>
                        {loading ? <span className='loading loading-spinner'></span>: "Sign up"}
                    </button>
                </form>

                <Link to={'/'}>
                    <p className='text-lg'>Have an Account? <button className='text-[#8551FF] font-bold'>Login</button></p>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Register