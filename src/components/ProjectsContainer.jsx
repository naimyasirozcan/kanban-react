
function ProjectsContainer() {
    const divStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        padding: '0 16px',
        marginTop: '40px'
    }
  return (
      <div className='sidebar-list' style={divStyle}>
        <p style={{paddingLeft: "10px"}}>Projects</p>
        <ul>
        <li>Today</li>
        <li>Tomorrow</li>
        <li>Planned</li>
        <li>Completed</li>
        </ul>
    </div>
  )
}

export default ProjectsContainer
