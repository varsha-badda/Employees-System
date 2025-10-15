import React from 'react'
import Header from '../others/Header'
import TaskList from '../others/TaskList'
import Tasklistt from '../TaskListing/Tasklistt'

const EmployeeDashboard = (props) => {

  return (
      <div className='p-6 '>
  
        <Header changeUser={props.changeUser} data={props.data}/>
        <TaskList  data={props.data}/>
        <Tasklistt  data={props.data}/>
      </div>
  )
}

export default EmployeeDashboard