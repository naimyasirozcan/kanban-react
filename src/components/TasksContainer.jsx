import { Link } from "react-router-dom"

function TasksContainer() {
    const divStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        padding: '0 16px'
    }
  return (
      <div className='sidebar-list' style={divStyle}>
        <p>Tasks</p>
        <ul>
        <Link to={'/'}><li>Today</li></Link>
        <Link to={'/tomorrow'}><li>Tomorrow</li></Link>
        <li>Planned</li>
        <li>Completed</li>
        </ul>
    </div>
  )
}

export default TasksContainer
