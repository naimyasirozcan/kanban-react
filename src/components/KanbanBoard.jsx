import KanbanCol from "./KanbanCol"
import { useState } from "react"


function KanbanBoard({taskData,setTaskData}) {

    const containerStyle = {
        width: "100%",
        height: "min-content",
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        gap: "24px",
        marginTop: "96px"

    }

    const columns = [{title:'To Do', color: '#d4abab4e'},{title:'In Progress', color: '#fff7b761'},{title:'Done', color: '#afe8a88b'}
    ]


    return (
        <div style={containerStyle}>
            {columns.map((eachColumns, index)=>{
             return( 
                   <KanbanCol key={index} taskData={taskData} setTaskData={setTaskData} color={eachColumns.color} title={eachColumns.title} />
                )
            })
            
            }
        </div>
    )
}

export default KanbanBoard
