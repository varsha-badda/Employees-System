import React from 'react'

const Header = ({data}) => {
const logOutUser =()=>{
  localStorage.setItem('loggedInUser','')
  window.location.reload()
}
  
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium text-white'>HELLO <br/> <span className='text-white text-3xl font-semibold'>{data.firstName} 👋</span></h1>
      <button onClick={logOutUser} className='bg-orange-600 text-white rounded-sm text-lg font-medium px-5 py-2'>Log Out</button>
    </div>
  )
}

export default Header
