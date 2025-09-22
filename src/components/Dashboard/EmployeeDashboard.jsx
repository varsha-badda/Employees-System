import React from 'react'
import Header from '../others/Header'
import TaskList from '../others/TaskList'
import Tasklistt from '../TaskList/Tasklistt'

const EmployeeDashboard = () => {
  return (
    <div>
      <div className='p-6 '>
        <Header/>
        <TaskList/>
        <Tasklistt/>
      </div>
    </div>
  )
}

export default EmployeeDashboard
