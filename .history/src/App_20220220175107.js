import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react"
import AddTask from "./components/AddTask";
function App() {
  const [showAddTask, setShowAddTask]= useState(false)

  const [tasks, setTasks]= useState(



    [
        {
            id: 1,
            text: 'Plank Supplier Appointment East London',
            day: 'March 4th at 3:00pm',
            reminder: true,
        },
        {
            id: 2,
            text: 'Bunky bed fixing at Mdanstane East London',
            day: 'March 4th at 3:00pm',
            reminder: true,
        },
        {
            id: 3,
            text: 'Bed Delivery in Nahoon Valley',
            day: 'March 4th at 3:00pm',
            reminder: true,
        },
    ]
)

//Add task
const addTask =(task)=>{
 const id = Math.floor(Math.random()* 10000) + 1
 const newTask={id, ...task}
 setTasks([...tasks, newTask])

}


//delete task
const deleteTask=(id)=>{
 setTasks(tasks.filter((task)=>task.id!==id))
}

const toggleReminder=(id)=>{
 setTasks(tasks.map((task)=>task.id===id? {...task, reminder:!task.reminder}:task))
}

  return (
    <div className="container">
    <Header onAdd={()=>setShowAddTask(!showAddTask)}  showAddTask />
    {showAddTask && <AddTask onAdd={addTask}/>}
    <AddTask 
    onAdd={addTask}
    
    />

    {tasks.length>0 ? (<Tasks 
    tasks={tasks} 
    onDelete={deleteTask}
    onToggle={toggleReminder}
    />)
    :
    (
      'No Tasks to show. Trying adding one'
    )
}
    </div>
  );
}

export default App;
