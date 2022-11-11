import useGetNewsData from "../../hooks/useGetNewsData";
import { openDetails, findNews } from "../../redux/slices/newsSlice";
import { useAppDispatch } from "../../hooks/useRedux";
import style from "../../styles/newsApp.module.scss";
const NewsAppDisplay = () => {
  const newsData = useGetNewsData();
  const dispatch = useAppDispatch();

  const showMoreHandleBtn = (idx: number): void => {
    dispatch(openDetails());
    dispatch(findNews(idx));
  };

  const newsDataDisplay = newsData.map((item, idx) => (
    <li key={idx} className={style.news_list}>
      <p className={style.news_list__title}>{item.title}</p>
      <div>
        <button onClick={() => showMoreHandleBtn(idx)}>
          Haberin devamı...
        </button>
        <code>{item.date.slice(0, 10)}</code>
      </div>
    </li>
  ));

  return <ol className={style.container}>{newsDataDisplay}</ol>;
};

export default NewsAppDisplay;
