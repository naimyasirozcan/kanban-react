import TaskCard from "./TaskCard"

function KanbanCol({ title, color, taskData, setTaskData, todaysTasks }) {
    const kanbanColStyle = {
        width: "300px",
        minHeight: "600px",
        height: "auto",
        backgroundColor: color,
        borderRadius: "36px",
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        alignItems: 'center',
        paddingBottom: '20px'
    }



    return (
        <div style={kanbanColStyle}>
            <h2 style={{ textAlign: 'center', marginTop: '20px' }}>{title}</h2>
            {taskData.
                filter((eachTask) => {
                    const todaysDate = new Date().toISOString()
                    const todaysDateFormatted = todaysDate.slice(0, todaysDate.indexOf("T"))
                    return eachTask.dueDate === todaysDateFormatted
                }).
                filter((eachTask) => {
                    return (
                        eachTask.status === title
                    )
                }).map((eachTask) => {
                    return <TaskCard key={eachTask.id} title={eachTask.title} priority={eachTask.priority} />
                })}
        </div>
    )
}

export default KanbanCol
