import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react"
function App() {

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

//delete task
const deleteTask=(id)=>{
 setTasks(tasks.filter((task)=>task.id!==id))
}

  return (
    <div className="container">
    <Header />
    {tasks.length>0 ? (<Tasks 
    tasks={tasks} 
    onDelete={deleteTask}
    />
}
    </div>
  );
}

export default App;
