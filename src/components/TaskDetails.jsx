import { useParams, useNavigate } from "react-router-dom"
import TitleAndDescription from "./TitleAndDescription"
import closeIcon from "../assets/img/close-icon-w.png"



function TaskDetails({ taskData, setTaskData }) {

  const { paramId } = useParams()
  const navigate = useNavigate() // explain igor later, used to go one page back while close icon clicked

  const taskToShow = taskData.find((task) => {
    return paramId === task.id
  })

  const taskDetailsDivStyle = {
    backgroundColor: "#252424d7",
    width: "1400px",
    height: "820px",
    borderRadius: "32px",
    marginTop: "100px"
  }
  
  return (
    <div style={taskDetailsDivStyle} className='background-blur'>
      <img
        src={closeIcon}
        alt="close-icon"
        style={{ position: "fixed", top: "16px", right: "16px", cursor: "pointer" }}
        onClick={() => {
          navigate(-1)
        }}
      />
      <TitleAndDescription title={taskToShow.title} description={taskToShow.description} />

    </div>
  )
}



export default TaskDetails
