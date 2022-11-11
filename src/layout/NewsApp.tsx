import NewsAppDisplay from "../components/NewsApp/NewsAppDisplay";
import ShowMoreModal from "../components/NewsApp/ShowMoreModal";
const NewsApp = () => {
  return (
    <div className="news-app">
      <NewsAppDisplay />
      <ShowMoreModal />
    </div>
  );
};

export default NewsApp;
