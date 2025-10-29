
function KanbanCol(props) {
    const kanbanColStyle = {
        width: "300px",
        minHeight: "600px",
        height: "auto",
        backgroundColor: props.type === "pending"
        ? "#d4abab4e"
        : props.type === "progress"
        ? "#fff7b761"
        : "#afe8a88b",
        borderRadius: "36px"
    }



    return (
        <div style={kanbanColStyle}>

        </div>
    )
}

export default KanbanCol
