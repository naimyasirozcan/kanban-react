import ProjectsContainer from "./ProjectsContainer"
import TasksContainer from "./TasksContainer"
import sideBarSwitchIcon from "../assets/img/sidebar-switch-icon-w.png"
import addTaskIcon from "../assets/img/add-icon-w.png"
import logoIcon from "../assets/img/logo-kanban.png"


function Sidebar() {
    const sidebarDivStyle = {
        height: '100vh',
        width: '303px',
        backgroundColor: '#293241',
        position: 'fixed',
        display:"flex",
        flexDirection: "column",
        justifyContent: "space-between",
        top: "0px",
        left: "0px",
    }
    const imgSidebarStyle = {
        width:'48px',
        
    }

  return (
    <div style={sidebarDivStyle}>
        <div style={{padding: '20px'}}> <img className="icon-img" style={imgSidebarStyle} src={sideBarSwitchIcon} alt="" />
            <div>
            <TasksContainer />
            <ProjectsContainer />
        </div>
        
        
        </div>
        
        <div style={{padding: '20px', display:'flex', justifyContent:'space-between'}}> 
            <img className="icon-img" style={{height:'42px', width: '42px'}} src={logoIcon} alt="" />
            <img className="icon-img" style={{ height:'42px', width: '42px'}} src={addTaskIcon} alt="" />
        </div>
    </div>
  )
}

export default Sidebar
