import { useState } from "react"

const Tasks = () => {

    const [tasks, setTasks]= use
  return (
    <>
{tasks.map((task)=>(
    <h3 key={task.id}>{task.text}</h3>
)


)}

    </>
  )
}

export default Tasks