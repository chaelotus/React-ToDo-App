import "./Completed.css";
import { MdCheckCircle } from "react-icons/md";
const Completed = () => {
  return (
    <div className="CompletedCard">
      <section className="CompletedCard-name">
        <div>
          <div className="completed-title">Meeting Client</div>
          <div className="completed-description">
            Redesign motion graphic...
          </div>
        </div>
        <div>
          <MdCheckCircle className="CompletedCheckIcon" />
        </div>
      </section>
      <section>
        <div className="Completed-date">Today 11:25 PM</div>
      </section>
    </div>
  );
};
export default Completed;
