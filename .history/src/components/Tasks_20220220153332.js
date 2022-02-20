

const Tasks = () => {

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
    <>
{tasks.map((task)=>(
    <h3 key={task.id}>{task.text}</h3>
)


)}

    </>
  )
}

export default Tasks