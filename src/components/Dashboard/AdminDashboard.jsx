import React from 'react'
import Header from '../others/Header'
import Createtask from '../others/Createtask'
import AllTask from '../others/AllTask'

const AdminDashboard = ({data}) => {
  return (
    <div className='h-screen w-full p-10'>
      <Header data={data}/>
      <Createtask/>
      <AllTask/>
    </div>
  )
}

export default AdminDashboard
