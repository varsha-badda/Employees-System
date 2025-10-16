import React from 'react'
import { useState } from 'react'
import  { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const Createtask = () => {

    const [userData,setUserData] = useContext(AuthContext)
    const [taskTitle,setTaskTitle] = useState('')
    const [taskDescription,setTaskDescription] = useState('')
    const [taskDate,setTaskDate] = useState('')
    const [assignTo,setAssignTo] = useState('')
    const [category,setCategory] = useState('')

    const[newTask,setNewTask] = useState({})
const submitHandler = (e) => {
  e.preventDefault();

  const task = {
    taskTitle,
    taskDescription,
    taskDate,
    category,
    active: false,
    new: true,
    failed: false,
    completed: false
  };

  // Create a fresh updated version of userData
  const updatedData = userData.map((elem) => {
    if (assignTo === elem.firstName) {
      const updatedTasks = [...elem.tasks, task];
      const updatedTaskCount = {
        ...elem.taskCount,
        new: elem.taskCount.new + 1,
      };
      return { ...elem, tasks: updatedTasks, taskCount: updatedTaskCount };
    }
    return elem;
  });

  // ✅ Update context correctly
  setUserData(updatedData);
  console.log('Updated Employees:', updatedData);

  // Clear all form inputs
  setTaskTitle('');
  setTaskDescription('');
  setTaskDate('');
  setAssignTo('');
  setCategory('');
};

  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
         <form onSubmit={(e)=>{
            submitHandler(e)
        }}
            className='flex flex-wrap w-full  items-start justify-between'
            >
           <div className='w-1/2'>
            <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                <input 
                value={taskTitle}
                onChange={(e)=>{
                    setTaskTitle(e.target.value)
                }}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' type='text' placeholder='Make a UI design'></input>
            </div>
            <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                <input 
                   value={taskDate}
                onChange={(e)=>{
                    setTaskDate(e.target.value)
                }}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' type="date" />
            </div>
            <div>  
                <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                <input 
                   value={assignTo}
                onChange={(e)=>{
                    setAssignTo(e.target.value)
                }}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' type='text' placeholder='Employee name'/>
            </div>
            <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                <input 
                   value={category}
                onChange={(e)=>{
                    setCategory(e.target.value)
                }}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' type="text" placeholder='Design,dev,etc'/>
            </div>
      </div>
    

           <div className='w-1/2 flex flex-col items-start'> 
                <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                <textarea
                      value={taskDescription}
  onChange={(e) => setTaskDescription(e.target.value)}
  className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400'
  placeholder='Task details...'
></textarea>

    
            <button className='bg-orange-600 py-3 hover:bg-orange-400 px-5 rounded text-sm mt-4 w-full'>Create task</button>
        </div>
        </form>
      </div>
  )
}

export default Createtask
