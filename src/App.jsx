import KanbanApp from "./components/KanbanApp"
import Sidebar from "./components/Sidebar"
import { BrowserRouter } from "react-router-dom"

const containerStyle = {
    display: "flex"
}




function App() {

  return (
    <BrowserRouter>
    <div style={containerStyle}>
      <Sidebar />
      <KanbanApp />
    </div>
    </BrowserRouter>
  )
}

export default App
