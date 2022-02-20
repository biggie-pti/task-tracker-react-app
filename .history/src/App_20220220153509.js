import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react"
function App() {

  const [tasks, setTasks]= useState(

    [
        {
            id: 1,
            text: 'Administrator Appointment',
            day: 'March 4th at 3:00pm',
            reminder: true,
        },
        {
            id: 2,
            text: 'President Appointment',
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
    <Tasks task/>
    </div>
  );
}

export default App;
