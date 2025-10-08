import React from 'react'
import Header from '../others/Header'
import TaskList from '../others/TaskList'
import Tasklistt from '../TaskListing/Tasklistt'

const EmployeeDashboard = ({data}) => {

  return (
      <div className='p-6 '>
  
        <Header data={data}/>
        <TaskList data={data}/>
        <Tasklistt data={data}/>
      </div>
  )
}

export default EmployeeDashboard