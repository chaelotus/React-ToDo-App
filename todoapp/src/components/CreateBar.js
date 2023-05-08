import { MdAdd } from "react-icons/md";
import "./CreateBar.css";
const CreateBar = () => {
  return (
    <div className="createBar">
      <MdAdd className="plusIcon" />
      <div className="createBar-text">Create New</div>
    </div>
  );
};
export default CreateBar;
