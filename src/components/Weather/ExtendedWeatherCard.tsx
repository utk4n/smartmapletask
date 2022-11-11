import { Icon } from "../ForSVG/SvgIconComp";
import style from "../../styles/weatherApp.module.scss";
import useGetWeatherData from "../../hooks/useGetWeatherData";

const ExtendedWeatherCard: any = () => {
  const weatherData = useGetWeatherData();

  const weatherDisplayer = weatherData.map((item, idx) => (
    <div key={idx} className={style.extended_weather__daily_cards}>
      <p className={style.extended_weather__daily_cards_date}>
        {item.date.slice(0, 10).split("-").reverse().join("/")}
      </p>
      <div className={style.extended_weather__daily_cards__status}>
        <Icon height={40} width={40} name={item.type} />
        <p>{item.temperature}</p>
      </div>
    </div>
  ));

  return weatherDisplayer;
};

export default ExtendedWeatherCard;
