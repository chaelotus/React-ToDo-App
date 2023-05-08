import userImage from "./user.png";
import "./mainPage.css";
import { MdNotificationImportant, MdMenu } from "react-icons/md";
import TodoCard from "../components/TodoCard";
import Completed from "../components/Completed";
import CreateBar from "../components/CreateBar";
import CreateToDo from "../components/CreateToDo";
const MainPage = () => {
  return (
    <div>
      <header>
        <div className="userInfo">
          <img className="userInfo-img" src={userImage}></img>
          <div className="userInfo-text">
            <div>Hello,</div>
            <div>Chaeyeon Park</div>
          </div>
        </div>
        <div className="header-menu">
          <div className="header-alert">
            <MdNotificationImportant />
          </div>
          <div className="header-nav">
            <MdMenu />
          </div>
        </div>
      </header>
      <main>
        <span className="Onprogress-title">On Progress </span>
        <span className="todoCount">(3)</span>
        <TodoCard />
        <span className="Completed-title">Completed </span>
        <span className="completedCount">(3)</span>
        <Completed></Completed>
      </main>
      <footer>
        <CreateBar />
      </footer>
      <CreateToDo />
    </div>
  );
};

export default MainPage;
