import { useAppDispatch, useAppSelector } from "./useRedux";
import { useEffect } from "react";
import { getWeatherData } from "../redux/slices/weatherSlice";
const useGetWeatherData = () => {
  const dispatch = useAppDispatch();
  const weatherData = useAppSelector((state) => state.weather.list);

  useEffect(() => {
    dispatch(getWeatherData());
  }, [dispatch]);

  return weatherData;
};

export default useGetWeatherData;
