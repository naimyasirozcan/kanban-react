function EachTaskDetail({ onChange, onClick, name, type, isEditing, title, parContent }) {
    



    // ------------------------------------------states--------------
    

    // ------------------------------------------states--------------
    // ------------------------------------------style--------------
    const taskDiv = {
        display: "flex",
        flexDirection: "column",
        width: "40%",
        height: "120px",
        justifyContent: "center",
        
    }

    // ------------------------------------------style--------------
    // ------------------------------------------handlers--------------



    // ------------------------------------------handlers--------------
    return (

        <div style={taskDiv}>
            <h2>{title}</h2> 

            {
                isEditing === false ? 
                <p  onClick={onClick} style={{ cursor: "pointer", fontSize: "24px" }}>{parContent}</p>
                : <input onChange={onChange} defaultValue={parContent} name={name} type={type} />
            }


        </div>
    )
} 

export default EachTaskDetail
