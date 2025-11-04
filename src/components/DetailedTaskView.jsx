import { useParams, useNavigate } from "react-router-dom"
import TitleAndDescription from "./TitleAndDescription"
import closeIcon from "../assets/img/close-icon-w.png"
import { useState } from "react"



function DetailedTaskView({ taskData, setTaskData }) {
  
  const [quitConfirmStyle, setQuitConfirmStyle] = useState({
    position: "absolute",
    display: "none",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000000d8",
    color: "#fff",
    width: "500px",
    height: "250px",
    top: '100px',
    left: '100px',
    borderRadius: "24px",
  })
  const { paramId } = useParams()
  const navigate = useNavigate() // explain igor later, used to go one page back while close icon clicked
  
  const taskToShow = taskData.find((task) => {
    return paramId === task.id
  })

  if (!taskToShow) {
  return null
}
  
  // ------------------------------style--------------------------------
  const confirmationDivBtn = {
    width: "110px",
    height: "55px",
    cursor: "pointer"
  }

  const taskDetailsBtn = {
    width: "110px",
    height: "55px",
    cursor: "pointer"
  }

  const taskDetailsDivStyle = {
    position: "relative",
    backgroundColor:
      taskToShow.priority === "Low" ?
        "#005a1746" :
        taskToShow.priority === "Medium" ?
          "#c592253a" :
          taskToShow.priority === "High" ?
            "#bd23233b" :
            null,

    width: "1400px",
    height: "720px",
    borderRadius: "32px",
    marginTop: "100px"
  }


  // ---------------------style end--------------------------------

 

  const taskDiv = {
    display: "flex",
    flexDirection: "column",
    width: "40%",
    height: "120px",
    justifyContent: "center"
  }

  const createdDateObj = new Date(taskToShow.createdDate)

  const formattedCreatedDate = createdDateObj.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric"
  })

  const dueDateObj = new Date(taskToShow.dueDate)

  const formattedDueDate = dueDateObj.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric"
  })

  const handleDelete = () => {
    const clone = [...taskData]
    console.log(clone)
    const indexToDelete = clone.findIndex((obj)=>{
      return obj.id === paramId
    })
    clone.splice(indexToDelete,1)
    console.log('clone after splice: ',clone)
    navigate(-1)
    setTaskData(clone)
    
    // We need to access the taskData and delete it from the array
    // We can use navigate -1 to go to the previous page. 
  }
  console.log(taskData)

  const showConfirmation = () => {
    const clone = structuredClone(quitConfirmStyle)

    clone.display = "flex"

    setQuitConfirmStyle(clone)
  }

  const closeConfirmation = () => {
    const clone = structuredClone(quitConfirmStyle)

    clone.display = "none"

    setQuitConfirmStyle(clone)
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

      <div style={{ padding: "60px", display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
        <div style={taskDiv}>
          <h2>Assignee:</h2>
          <p style={{ fontSize: "24px" }}>{taskToShow.assignee}</p>
        </div>
        <div style={taskDiv}>
          <h2>Created on:</h2>
          <p style={{ fontSize: "24px" }}>{formattedCreatedDate}</p>
        </div>
        <div style={taskDiv}>
          <h2>Status:</h2>
          <p style={{ fontSize: "24px" }}>{taskToShow.status}</p>
        </div>
        <div style={taskDiv}>
          <h2>Due Date:</h2>
          <p style={{ fontSize: "24px" }}>{formattedDueDate}</p>
        </div>
        <div style={taskDiv}>
          <h2>Priority:</h2>
          <p style={{ fontSize: "24px" }}>{taskToShow.priority}</p>
        </div>
        <div style={{
          width: "40%",
          height: "120px",
          display: "flex",
          alignItems: "center",
          gap: "24px"
        }}>
          <button style={taskDetailsBtn}>Edit</button>
          <button style={taskDetailsBtn} onClick={showConfirmation}>Delete</button>
        </div>
      </div>

      <div
        className="background-blur"
        style={quitConfirmStyle}>

        <h1 style={{ textAlign: "center", marginBottom: "32px" }}>Are you sure to delete task?</h1>

        <div style={{ display: "flex", gap: "24px" }}>
          <button onClick={closeConfirmation} style={confirmationDivBtn}>Cancel</button>
          <button style={confirmationDivBtn} onClick={handleDelete}>Delete</button>
        </div>
      </div>

    </div>
  )
}



export default DetailedTaskView
