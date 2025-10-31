import TaskCard from "./TaskCard"

function ListOfTasks({taskData,setTaskData}) {
  return (
    <>
        <ul style={{display:'flex',flexDirection:'column',gap:'20px',alignItems:'center',marginTop:'20px'}}>
            {
                taskData.map((eachTask)=>{
                    return(
                        <TaskCard title={eachTask.title} priority={eachTask.priority} cardType={'listCard'} />
                    )
                })
            }
        </ul>
    </>    
)
}

export default ListOfTasks
