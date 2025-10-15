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
         {authData.employees.map(function(elem,idx){
            return <div key={idx} className='bg-black border-2 border--600 py-2 px-4 flex justify-between rounded'>
            <h2 className='w-1/5 text-white '>{elem.firstName}</h2>
            <h3 className='w-1/5 text-white'>{elem.taskCount.new}</h3>
            <h5 className='w-1/5 text-white'>{elem.taskCount.active}</h5>
            <h5 className='w-1/5 text-white'>{elem.taskCount.completed}</h5>
            <h5 className='w-1/5 text-red-700'>{elem.taskCount.failed}</h5>
        </div>
          })}
       </div>
      
        
      
       
      
    </div>
  )
}

export default AllTask
