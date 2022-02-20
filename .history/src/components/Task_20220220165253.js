
import {FaTimes} from 'react-icons/fa'
const Task = ({task , onDelete, ON}) => {
  return (
    <div className='task' onDoubleClick={}>
        <h3>{task.text}<FaTimes
         style={{
             color:'red',
             cursor: 'pointer',
         
         }}
         onClick={()=>onDelete(task.id)}
         /></h3>
        <p>{task.day}</p>

    </div>
  )
}

export default Task