import NewsApp from "../layout/NewsApp";
import TodoListApp from "../layout/TodoListApp";
import WeatherApp from "../layout/WeatherApp";
import "../styles/layout.scss";
const Home = () => {
  return (
    <div className="layout">
      <div className="layout__left">
        <TodoListApp />
      </div>
      <div className="layout__right">
        <NewsApp />
        <WeatherApp />
      </div>
    </div>
  );
};

export default Home;
