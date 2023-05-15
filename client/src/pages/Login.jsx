import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login, reset } from '../features/auth/authSlice'

const Login = () => {
  
  const [formData, setFormData] = useState({
    username:"",
    password:"",
  })
  const {user, isLoading, isSuccess, isError, message} = useSelector((state) => state.auth)
   
   
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if(isError) console.log(message);
    if(user || isSuccess) navigate('/')
    if(isLoading){
        
    }
    dispatch(reset())

  },[user, isSuccess, isError, message, navigate, dispatch])


  const {username, password} = formData;

  const handleSubmit = (e) => {
   
    e.preventDefault();
    const userData = {
        username, password
    }
    dispatch(login(userData))
    navigate('/')
  }
  return (
    <div className='min-h-screen max:w-screen flex items-center justify-center bg-slate-100 relative p-4 sm:p-0'>
        <div className='h-1/3 w-full sm:w-[30rem] bg-white  p-4 space-y-4'>
            <p className='font-light text-2xl uppercase'>Sign in</p>
            <div className='w-full  flex flex-wrap items-center justify-between gap-5  '>
                <input name='username' type="text" onChange={(e)=> setFormData({...formData,username: e.target.value})} className='border font-light border-gray-300 outline-none p-3 w-full  placeholder:font-light' value={formData?.username} placeholder='username' />

                <input name='password' type="text" onChange={(e)=> setFormData({...formData,password: e.target.value})} className='border font-light border-gray-300 outline-none p-3 w-full  placeholder:font-light' value={formData?.password} placeholder='password' />
            </div>
            <p className='font-light'>Forget password!</p>
            <button onClick={handleSubmit} className='w-44 font-light hover:bg-opacity-80 p-3 uppercase bg-teal-600 text-sm text-white'>Login </button>
            <p className='font-light'>Already have an Account ?</p>
        </div>
        
    </div>
  )
}

export default Login