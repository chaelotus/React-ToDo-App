import { MdPerson, MdSupervisorAccount } from "react-icons/md";
import "./CreateToDo.css";
const CreateToDo = () => {
  return (
    <div className="CreateToDoModul">
      <div className="line"></div>
      <div className="ModulTitle">New Task ToDo</div>
      <form>
        <section>
          <div className="TitleTask">Title Task</div>
          <input
            className="TitleTaskInput"
            type="text"
            placeholder="Add Task Name..."
          ></input>
        </section>
        <section>
          <div className="Category">Category</div>
          <div className="CategoryToggle">
            <div className="Personal">
              <MdPerson />
              Personal
            </div>
            <div className="Teams">
              <MdSupervisorAccount />
              Teams
            </div>
          </div>
        </section>
        <section>
          <div className="Description">Description</div>
          <textarea
            className="DescriptionTextArea"
            placeholder="Add Descriptions..."
          ></textarea>
        </section>
        <section>
          <div className="CreateDate">
            <div className="CompletedDay">Date</div>
            <div className="CompletedTime">Time</div>
          </div>

          <input className="DayInput" type="date"></input>
          <input className="TimeInput" type="time"></input>
        </section>
        <section className="CreateTodoBtn">
          <button className="CancelBtn">Cancel</button>
          <button className="CreateBtn">Create</button>
        </section>
      </form>
    </div>
  );
};
export default CreateToDo;
