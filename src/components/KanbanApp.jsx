import TitleAndDescription from "./TitleAndDescription"
import KanbanBoard from "./KanbanBoard"





function KanbanApp() {

  

  const kanbanAppStyle = {
    width: "100%",
    display: "flex",
    flexDirection: "column"
  }

  return (
    <div style={kanbanAppStyle}>
      <TitleAndDescription title="Today's work." description="Let's do it!" />

      <KanbanBoard/>

    </div>
  )
}

export default KanbanApp