import TitleAndDescription from "../components/TitleAndDescription";

function AddNewTask() {
  return (
    <>
      <TitleAndDescription title={'Create a new Task'} description={"Add all task's details"}/>
      <div>
            <form>
            <label>
                Name:
                <input name='title' type="text" placeholder="Task Title" ></input>
            </label>
            <label>
                Description:
                <input name ='description' type="text" placeholder="Task Description"/>
            </label>
            <label>
                Assignee:
                <input name='assignee' type="text" placeholder="Eg. John" />
            </label>
            <label>
                Status:
                <select name="status" >
                    <option value="">-- None --</option>
                    <option value="To Do"> To Do </option>
                    <option value="In Progress"> In Progress</option>
                    <option value="Done"> Done </option>
                </select>
            </label>
            <label>
                Priority:
                <select name="priority" >
                    <option value="">-- None --</option>
                    <option value="Low"> Low </option>
                    <option value="Medium"> Medium</option>
                    <option value="High"> High </option>
                </select>
            </label>
            <label>
                Due Date:
                <input type="date" name="duedate" />
            </label>
        </form>
        </div>
    </>
  );
}

export default AddNewTask;
