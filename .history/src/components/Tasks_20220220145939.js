
const tasks=[
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
const Tasks = () => {
  return (
    <>
{tasks.map(())}

    </>
  )
}

export default Tasks