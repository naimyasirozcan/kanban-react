
import taskDataJSON from '../assets/data/kanbanData.json'
import { useState } from "react"
import TodayPage from "../pages/TodayPage"
import { Route,Routes } from 'react-router-dom'
import Tomorrow from '../pages/Tomorrow'




function KanbanApp() {

const [taskData, setTaskData] = useState(taskDataJSON)

  const kanbanAppStyle = {
    width: "100%",
    display: "flex",
    flexDirection: "column"
  }

  return (
    <div style={kanbanAppStyle}>
      <Routes>
        <Route element={<TodayPage taskData={taskData} setTaskData={setTaskData}/>} path='/'/>
        <Route element={<Tomorrow taskData={taskData} setTaskData={setTaskData}/>} path='/tomorrow'/>
      </Routes>
    </div>
  )
}

export default KanbanApp
