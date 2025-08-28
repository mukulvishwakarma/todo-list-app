import React from "react";

function TodoItem({task}){
    return <li>{task.name}</li>
}
function TodoList({tasks}){
    return(
        <ul>
        {tasks.map((task) => (
            <TodoItem key={task.id} task={task} />
        ))}
        </ul>
    )
}
export default TodoList
