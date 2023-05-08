import "./TodoCard.css";
const TodoCard = () => {
  return (
    <div className="Card">
      <section className="Card-name">
        <div>
          <div className="title">Design UI ToDo APP</div>
          <div className="date">Friday, 08, May 2023</div>
        </div>
        <div>
          <img className="category"></img>
        </div>
      </section>
      <section>
        <span className="description-title">Description : </span>
        <div className="description-sub">
          Desigin a simple home pages with clean layout and color based on the
          guidelines..
        </div>
      </section>
    </div>
  );
};
export default TodoCard;
