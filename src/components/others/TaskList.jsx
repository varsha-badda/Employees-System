import React from 'react'

const TaskList = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
      <div className='py-6 px-9 rounded-xl w-[45%] bg-orange-600'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3>New Task</h3>
      </div>
      <div className='py-6 px-9 rounded-xl w-[45%] bg-blue-600'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3>New Task</h3>
      </div>
      <div className='py-6 px-9 rounded-xl w-[45%] bg-green-600'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3>New Task</h3>
      </div>
      <div className='py-6 px-9 rounded-xl w-[45%] bg-yellow-600'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3>New Task</h3>
      </div>
    </div>
  )
}

export default TaskList
