import React from 'react'

const ListTasks = ({task, index, removeTask}) => {
  return (
    <>
    <div className='list-tasks d-flex justify-content-between'>
        <input type='checkbox'></input>
        {task.title}
        <button onClick={()=>{removeTask(index)}}
        className='delete-btn'>Delete</button>
    </div>
    </>
  )
}

export default ListTasks;