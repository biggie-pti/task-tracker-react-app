
import Task from "./Task"
const Tasks = ({tasks}) => {

  return (
    <>
{tasks.map((task)=>(
    <Task key={task.id}>{task.text}</h3>
)


)}

    </>
  )
}

export default Tasks