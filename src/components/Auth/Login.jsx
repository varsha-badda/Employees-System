import React, { useState } from 'react'

const Login = (handleLogin) => {
  
   const [email,setEmail] = useState(' ')
   const [password,setpassword] = useState(' ')
  const submitHandler =(e)=>{
    e.preventDefault()
    handleLogin(email,password)
    setEmail(" ")
    setpassword(" ")
  }
  return (
    <div className='flex h-screen w-screen items-center justify-center bg-black'>
        <div className ='rounded border-2 border-orange-600 p-20'>
            
        <form onSubmit={(e)=>
          submitHandler(e)
        }
        className='flex flex-col items-center justify-center'>

            <input 
            onChange = {(e)=>{
              setEmail(e.target.value)
            }
          }
              required className='text-white outline-none bg-transparent border-2 border-orange-600 py-3 px-5 rounded-full placeholder:text-white'type="email" placeholder='Enter your email'></input>
            <input 
            onChange = {(e)=>{
              setpassword(e.target.value)
            }
          }
            required className='text-white outline-none bg-transparent border-2 border-orange-600 py-3 px-5 rounded-full mt-3 placeholder:text-white'type="password" placeholder='Enter your password'></input>
            <button className= 'text-white outline-none border-2 bg-orange-600 py-3 px-5 rounded-full mt-3'>Log In</button>
        </form>
      </div>
    </div>
  )
}

export default Login
function handleLogin(email, password) {
  throw new Error('Function not implemented.')
}

