import ListOfTasks from "../components/ListOfTasks"
import TitleAndDescription from "../components/TitleAndDescription"

function Tomorrow({taskData,setTaskData}) {
  return (
    <>
    <TitleAndDescription title="Tomorrow's Tasks" description="Check your work"/>
    <ListOfTasks taskData={taskData} setTaskData={setTaskData} />
    </>
  )
}

export default Tomorrow
