import { useParams, useNavigate } from "react-router-dom"
import TitleAndDescription from "./TitleAndDescription"
import closeIcon from "../assets/img/close-icon-w.png"
import { useEffect, useState } from "react"
import EachTaskDetail from "./EachTaskDetail"


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
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Enter") {
        if (isEditing === true) {

          const clone = [...taskData]
          const indexToUpdate = clone.findIndex((obj) => {
            return obj.id === paramId
          })

          clone[indexToUpdate].assignee = newAssignee

          setTaskData(clone)
          setIsEditing(false)
        }
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    // cleanup — remove o listener quando o componente sair da tela
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isEditing]);





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

  const handleSwitchEdit = (e) => {
    console.log("clicked")
    console.log(e.target.parent)
    isEditing === true ?
      setIsEditing(false) :
      setIsEditing(true)

    console.log(isEditing)

  }

  const handleDelete = () => {
    const clone = [...taskData]
    console.log(clone)
    const indexToDelete = clone.findIndex((obj) => {
      return obj.id === paramId
    })
    clone.splice(indexToDelete, 1)
    console.log('clone after splice: ', clone)
    navigate(-1)
    setTaskData(clone)
  }

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

  let newAssignee = null


  const changeHandle = (e) => {
    console.log(e.target.value)

    e.target.name === "assignee" ?
      newAssignee = e.target.value : null
  }

  console.log(newAssignee)


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


        <EachTaskDetail onChange={changeHandle} onClick={handleSwitchEdit} name={"status"} type={"dropdown"} parContent={taskToShow.status} isEditing={isEditing} title={"Status"} />

        <EachTaskDetail onChange={changeHandle} onClick={handleSwitchEdit} name={"assignee"} type={"text"} parContent={taskToShow.assignee} isEditing={isEditing} title={"Assignee"} />

        <EachTaskDetail onChange={changeHandle} onClick={handleSwitchEdit} name={"priority"} type={"dropdown"} parContent={taskToShow.priority} isEditing={isEditing} title={"Priority"} />

        <EachTaskDetail onChange={changeHandle} onClick={handleSwitchEdit} name={"createdDate"} type={"date"} parContent={formattedCreatedDate} isEditing={isEditing} title={"Creation Date"} />

        <EachTaskDetail onChange={changeHandle} onClick={handleSwitchEdit} name={"dueDate"} type={"date"} parContent={formattedDueDate} isEditing={isEditing} title={"Due Date"} />


        <div style={{
          width: "40%",
          height: "120px",
          display: "flex",
          alignItems: "center",
          gap: "24px"
        }}>
          {/* <button style={taskDetailsBtn}>Edit</button> */}
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
