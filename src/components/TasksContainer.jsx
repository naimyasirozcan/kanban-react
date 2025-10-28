
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
        <li>Today</li>
        <li>Tomorrow</li>
        <li>Planned</li>
        <li>Completed</li>
        </ul>
    </div>
  )
}

export default TasksContainer
