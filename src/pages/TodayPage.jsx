import TitleAndDescription from "../components/TitleAndDescription"
import KanbanBoard from "../components/KanbanBoard"

function TodayPage({taskData,setTaskData}) {
  return (
    <>
    <TitleAndDescription title="Today's work." description="Let's do it!" />
    <KanbanBoard taskData={taskData} setTaskData={setTaskData}/>
    </>
  )
}

export default TodayPage
