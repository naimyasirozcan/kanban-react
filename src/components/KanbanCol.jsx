import TaskCard from "./TaskCard"

function KanbanCol({title, color,taskData,setTaskData}) {
    const kanbanColStyle = {
        width: "300px",
        minHeight: "600px",
        height: "auto",
        backgroundColor: color,
        borderRadius: "36px",
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        alignItems: 'center'
    }



    return (
        <div style={kanbanColStyle}>
            <h2 style={{textAlign:'center',marginTop:'20px'}}>{title}</h2>
            {taskData.
            filter((eachTask)=>{
                return (
                    eachTask.status === title
                )
            }).map((eachTask)=>{
                return <TaskCard title={eachTask.title} priority={eachTask.priority} />
            })}
        </div>
    )
}

export default KanbanCol
