import KanbanApp from "./components/KanbanApp"
import Sidebar from "./components/Sidebar"

const containerStyle = {
    display: "flex"
}




function App() {

  return (
    <div style={containerStyle}>
      <Sidebar />
      <KanbanApp />
    </div>
  )
}

export default App