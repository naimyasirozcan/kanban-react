import ProjectsContainer from "./ProjectsContainer"
import TasksContainer from "./TasksContainer"
import sideBarSwitchIcon from "../assets/img/sidebar-switch-icon-w.png"
import addTaskIcon from "../assets/img/add-icon-w.png"
import logoIcon from "../assets/img/logo-kanban.png"
import { Link } from "react-router-dom"


function Sidebar() {
    const sidebarDivStyle = {
        minHeight: '100vh',
        width: '303px',
        backgroundColor: '#293241',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    }
    const imgSidebarStyle = {
        width:'48px',
        
    }

  return (
    <div style={sidebarDivStyle}>
        <div style={{padding: '20px', marginBottom: '80px'}}> <img className="icon-img" style={imgSidebarStyle} src={sideBarSwitchIcon} alt="" /></div>
        <div style={{paddingBottom: '600px'}}>
            <TasksContainer />
            <ProjectsContainer />
        </div>
        <div style={{padding: '20px', display:'flex', justifyContent:'space-between'}}> 
            <img className="icon-img" style={{...imgSidebarStyle, height:'42px', width: '42px'}} src={logoIcon} alt="" />
            <img className="icon-img" style={{...imgSidebarStyle, height:'42px', width: '42px'}} src={addTaskIcon} alt="" />
        </div>
    </div>
  )
}

export default Sidebar
