import KanbanCol from "./KanbanCol"
import userDataJSON from "../assets/data/kanbanData.json"

import { useState } from "react"

function KanbanBoard() {

    const [userData, setUserData] = useState(userDataJSON)


    const containerStyle = {
        width: "100%",
        height: "min-content",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "24px",
        marginTop: "96px"

    }
    return (
        <div style={containerStyle}>
            <KanbanCol type="pending" content="array1" />
            <KanbanCol type="progress" content="array2"/>
            <KanbanCol type="done" content="array3"/>
        </div>
    )
}

export default KanbanBoard
