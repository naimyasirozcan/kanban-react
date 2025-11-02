
import taskDataJSON from '../assets/data/kanbanData.json'
import { useState } from "react"
import TodayPage from "../pages/TodayPage"
import { Route,Routes } from 'react-router-dom'
// import Tomorrow from '../pages/Tomorrow'
import ListOfTasks from '../pages/ListOfTasks'




function KanbanApp() {

const [taskData, setTaskData] = useState(taskDataJSON)

  const kanbanAppStyle = {
    width: "100%",
    display: "flex",
    flexDirection: "column"
  }

  const taskLists = [
    {title: "tomorrow", description: "Tomorrow's work."},
    {title: "planned", description: "All tasks in wait list."},
    {title: "completed", description: "Done work."}
  ]

  return (
    <div style={kanbanAppStyle}>
      <Routes>
        <Route element={<TodayPage taskData={taskData} setTaskData={setTaskData}/>} path='/'/>
        
        {taskLists.map((eachTaskList) => {
          return(
          <Route element={<ListOfTasks taskData={taskData} setTaskData={setTaskData} title={eachTaskList.title} description={eachTaskList.description}/>} path={`/${eachTaskList.title}`}/>)
          
        })}


      </Routes>
    </div>
  )
}

export default KanbanApp
