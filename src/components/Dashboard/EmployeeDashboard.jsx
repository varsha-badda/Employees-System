import React from 'react'
import Header from '../others/Header'
import TaskList from '../others/TaskList'
import Tasklistt from '../TaskList/Tasklistt'

const EmployeeDashboard = (data) => {

  return (
    <div>
      <div className='p-6 '>
  
        <Header data={data}/>
        <TaskList data={data}/>
        <Tasklistt data={data}/>
      </div>
    </div>
  )
}

export default EmployeeDashboard
