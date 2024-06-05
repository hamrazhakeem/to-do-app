import React, {useState} from 'react'


export const ToDoForm = ({addTodo}) => {
    const [value, setValue] = useState("")
    const handleSubmit = e => {
        e.preventDefault();

        addTodo(value);

        setValue("")
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' className='todo-input' value={value} placeholder="What's todays task" onChange={(e) => setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}
