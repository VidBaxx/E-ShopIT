import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';


import{signup} from '../../../redux/features/auth/signupSlice';
import {handleGoogleCallback} from '../../../redux/features/auth/oauthSlice'

export default function Signin() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [email ,setEmail] = useState('');
  const[formError, setError] = useState()
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const {error, loading, isAuthenticated,user} = useSelector((state) => state.authSignUp);

  const handleSignin = (e) =>{
    e.preventDefault();
    if (!email || !password) {
      setError('Field should be filled');
      return
    }
    dispatch(signup({email:email,password:password}));
  };
  

  const handleSignInWithGoogle = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams)
    const code = urlParams.get('code');
    console.log(code)
    if (code) {
      dispatch(handleGoogleCallback(code));
    }
  };
  


useEffect (()=>{
if(isAuthenticated){navigate(`/`)}

},[isAuthenticated,navigate])

  return (
    <div  className="bg-gray-100 min-h-screen flex flex-col justify-center py-6 sm:py-12 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
          <div className='flex flex-col  items-center mb-3'>
          <h2 className="text-4xl font-font-semibold mb-2 text-orange-500  ">SIGN UP</h2>
          <p className='text-sm text-gray-400'> Welcome to E-shopIt</p>
          </div>
      {error && <p className="text-red-500">{error}</p>}
      <form className="space-y-6">
        <label className="block text-gray-700 font-bold mb-1">Email:
        <input 
               type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                className={`appearance-none block w-full py-3 px-4 border ${formError && !email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                />
                {formError && !email && <p className="text-red-500">{formError}</p>}
        </label>
         
        <label className="block text-gray-700 font-bold mb-2"> Password:
        <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            className={`appearance-none block w-full py-3 px-4 border ${formError && !email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
            />
            {formError && !password && <p className="text-red-500">{formError}</p>}
        </label>
         
        <button type="submit" 
                onClick={handleSignin}
                className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm 
                font-medium text-white  bg-orange-500  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                // disabled={!email || !password}
                >
          {loading && <div>loading ....</div>}
          SIGN UP
        </button>
        <div className='flex items-center justify-center'>            
          <small >or</small>
        </div>
        <button
        type='submit'
        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black  bg-gray-200  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={handleSignInWithGoogle}
        >
          <FaGoogle className="mr-2 my-[2px]"/>
          SIGN UP USING GOOGLE
        </button>
        <p className='text-center flex items-center justify-center text-[14px]'>Already have an account?
        <Link to='/login' className='font-semibold'>  login here</Link>
        </p>
      </form>
    </div>
    </div>

    </div>
  )
}
