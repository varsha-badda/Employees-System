import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'


const AllTask = () => {
    const authData = useContext(AuthContext)
  return (
    <div className='bg-[#1c1c1c] p-5 mt-5 rounded h-52 '>
      <div className='bg-orange-600 py-2 px-4 flex justify-between rounded'>
            <h2 className='w-1/5 '>Employee Name</h2>
            <h3 className='w-1/5 '>New Task</h3>
            <h5 className='w-1/5 '>Active Task</h5>
            <h5 className='w-1/5 '>Completed</h5>
            <h5 className='w-1/5 '>Failed</h5>
        </div>
       <div className = 'h-[95%] overflow-auto'>
         {authData.employees.map(function(elem){
            return <div className='bg-black py-2 px-4 flex justify-between rounded'>
            <h2 className='w-1/5 text-white '>{elem.firstName}</h2>
            <h3 className='w-1/5 text-'>Task</h3>
            <h5 className='w-1/5 text-white'>Status</h5>
            <h5 className='w-1/5 text-white'>Status</h5>
            <h5 className='w-1/5 text-red-700'>Failed</h5>
        </div>
          })}
       </div>
      
        
      
       
      
    </div>
  )
}

export default AllTask
