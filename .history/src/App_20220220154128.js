import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react"
function App() {

  const [tasks, setTasks]= useState(

    [
        {
            id: 1,
            text: 'Plank Supplier Appointment',
            day: 'March 4th at 3:00pm',
            reminder: true,
        },
        {
            id: 2,
            text: 'Bunky bed ',
            day: 'March 4th at 3:00pm',
            reminder: true,
        },
        {
            id: 3,
            text: 'Bed Delivery',
            day: 'March 4th at 3:00pm',
            reminder: true,
        },
    ]
)

  return (
    <div className="container">
    <Header />
    <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
