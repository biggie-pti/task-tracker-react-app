
const AddTask = () => {
  return (
 
<form className='add-form'>

    <div className='form-control'>
    <label>Task</label>
    <input type='text' placeholder='Add Task'/>
    </div>

    <div className='form-control'>
    <label>Day & Time</label>
    <input type='text' placeholder='Add Task'/>
    </div>

    <div className='form-control'>
    <label>Set Reminder</label>
    <input type='check' placeholder='Add Task'/>
    </div>
</form>

  )
}

export default AddTask