import React, { useState } from "react";

function TodoForm({ addTask }){
    const [task, setTask] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!task) return
        addTask(task)
        setTask('')
    }
    return(
        <form onClick={handleSubmit}>
            <input type="text" value={task} onChange={(e)=> setTask(e.target.value)} placeholder="Enter a new Task"/>
            <button type="button">Add Task</button>
        </form>
    )
}

export default TodoForm