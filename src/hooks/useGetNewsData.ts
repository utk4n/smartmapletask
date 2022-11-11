import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./useRedux";
import { getNewsData } from "../redux/slices/newsSlice";
const useGetNewsData = () => {
  const dispatch = useAppDispatch();
  const newsData = useAppSelector((state) => state.news.list);

  useEffect(() => {
    dispatch(getNewsData());
  }, [dispatch]);

  return newsData;
};

export default useGetNewsData;
