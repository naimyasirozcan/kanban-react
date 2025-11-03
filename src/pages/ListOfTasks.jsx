import { Link } from "react-router-dom"
import TaskCard from "../components/TaskCard"
import TitleAndDescription from "../components/TitleAndDescription"


function ListOfTasks({ taskData, setTaskData, title, description }) {


    const oneDayAsMiliseconds = 1000 * 60 * 60 * 24
    const currentDate = new Date()

    const tomorrowsDate = new Date(currentDate.getTime() + oneDayAsMiliseconds)

    const tomorrowTasks = taskData.filter((eachTask => {
        return tomorrowsDate
            .toISOString()
            .slice(0, tomorrowsDate.toISOString().indexOf("T")) === eachTask.dueDate
    }))

    const plannedTasks = taskData.filter((eachTask => {
        const dueDateObj = new Date(eachTask.dueDate)
        return dueDateObj.getTime() > tomorrowsDate.getTime()
    }))

    const completedTasks = [] // dont forget!!!!!

    let tasksToRender = title === "tomorrow" ?
        tomorrowTasks :
        title === "planned" ?
            plannedTasks :
            title === "completed" ?
                completedTasks :
                null

    return (

        <>
            <TitleAndDescription title={title[0].toUpperCase() + title.slice(1)} description={description} />

            <ul style={{ width: "100%", display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center', marginTop: '20px' }}>
                {
                    (tasksToRender.map((eachTask) => {
                        return (<Link style={{width: "100%", display:"flex", justifyContent:"center"}} to={`/tasks/${eachTask.id}`}>
                            <TaskCard key={eachTask.id} title={eachTask.title} priority={eachTask.priority} cardType={'listCard'} />
                        </Link>)
                    }))
                }
            </ul>

        </>
    )
}

export default ListOfTasks