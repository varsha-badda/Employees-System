import React from 'react'
import Accept from './Accept'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const Tasklistt = ({data}) => {
  return (
    <div id='tasklistt' className=' overflow-x-auto flex items-start justify-start gap-4 flex-nowrap py-5 h-[400px] w-full mt-10 '>
    {data.tasks.map((elem,idx) =>{
      if(elem.active){
        return <Accept key={idx} data={elem}/>
      }
      if(elem.new){
        return <NewTask key={idx} data={elem}/>
      }
      if(elem.completed){
        return <CompleteTask key={idx} data={elem}/>
      }
      if(elem.failed){
        return <FailedTask key={idx} data={elem}/>
      }
    }
    ) }
    </div>

  )
}

export default Tasklistt
