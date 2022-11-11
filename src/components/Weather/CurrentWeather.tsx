import dayjs from "dayjs";
import useGetWeatherData from "../../hooks/useGetWeatherData";
import { Icon } from "../ForSVG/SvgIconComp";
import style from "../../styles/weatherApp.module.scss";
const CurrentWeather = () => {
  const weatherData = useGetWeatherData();
  const realDate = dayjs().format("YYYY-MM-DD");
  const dataDate = weatherData.find((dt) => dt.date.slice(0, 10) === realDate);
  return (
    <div className={style.current_weather__info}>
      <p className={style.current_weather__city_name}>Ankara</p>
      <div className={style.current_weather__type}>
        <Icon height={100} width={100} name={dataDate?.type} />
        <p>{dataDate?.type}</p>
      </div>
      <div className={style.current_weather__temp}>
        <p>{dataDate?.temperature}</p>
      </div>
    </div>
  );
};

export default CurrentWeather;
