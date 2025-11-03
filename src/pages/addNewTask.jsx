import { useState } from "react";
import TitleAndDescription from "../components/TitleAndDescription";

function AddNewTask({taskData,setTaskData}) {
    const [formData,setFormData] = useState({
        id:Math.floor(Math.random()*10000).toString(),
        title:"",
        description: "",
        assignee: "",
        status: "",
        priority:"",
        createdDate: new Date().toISOString().split('T')[0],
        dueDate: "",
    }
    )
    function handleChange(e){
        const {name,value} = e.target
        setFormData(prev=>({...prev,[name] : value}))
    }
    function handleAddTaskData(e){
        e.preventDefault()
        setTaskData(prev=>([...prev,formData]))
        
    }
    const formStyle = {
        display:'flex',
        flexDirection: 'column',
        gap: '20px',
    }
    const divFormStyle = {
        backgroundColor:'#14161990',
        margin: '30px',
        padding: '20px',
        borderRadius: '20px'
    }
    console.log(taskData)
  return (
    <>
      <TitleAndDescription title={'Create a new Task'} description={"Add all task's details"}/>
      <div style={divFormStyle}>
            <form style={formStyle}>
            <label>
                Name:
                <input name='title' type="text" placeholder="Task Title"  onChange={handleChange} value={formData.title}></input>
            </label>
            <label>
                Description:
                <input name ='description' type="text" placeholder="Task Description" onChange={handleChange} value={formData.description}/>
            </label>
            <label>
                Assignee:
                <input name='assignee' type="text" placeholder="Eg. John" onChange={handleChange} value={formData.assignee} />
            </label>
            <label>
                Status:
                <select name="status" onChange={handleChange} value={formData.status} >
                    <option value="">-- None --</option>
                    <option value="To Do"> To Do </option>
                    <option value="In Progress"> In Progress</option>
                    <option value="Done"> Done </option>
                </select>
            </label>
            <label>
                Priority:
                <select name="priority" onChange={handleChange} value={formData.priority} >
                    <option value="">-- None --</option>
                    <option value="Low"> Low </option>
                    <option value="Medium"> Medium</option>
                    <option value="High"> High </option>
                </select>
            </label>
            <label>
                Due Date:
                <input type="date" name="dueDate" onChange={handleChange} value={formData.dueDate}/>
            </label>
            <button type="submit"onClick={handleAddTaskData}>Create Task</button>
        </form>
        </div>
    </>
  );
}

export default AddNewTask;
