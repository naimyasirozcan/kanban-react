import { Link } from "react-router-dom"

function TasksContainer() {
    const divStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        padding: '0 16px',
        marginTop: "40px"
    }
  return (
      <div className='sidebar-list' style={divStyle}>
        <p style={{paddingLeft: "10px"}}>Tasks</p>
        <ul>
        <Link to={'/'}><li>Today</li></Link>
        <Link to={'/tomorrow'}><li>Tomorrow</li></Link>
        <Link to={'/planned'}><li>Planned</li></Link>
        <Link to={'/completed'} ><li>Completed</li></Link>
        </ul>
    </div>
  )
}

export default TasksContainer
