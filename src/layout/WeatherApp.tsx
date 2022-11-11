import ExtendedWeatherCard from "../components/Weather/ExtendedWeatherCard";
import CurrentWeather from "../components/Weather/CurrentWeather";
import style from "../styles/weatherApp.module.scss";
const WeatherApp = () => {
  return (
    <div className="weather-app">
      <div className={style.container}>
        <div className={style.current_weather}>
          <p className={style.current_weather__title}>Current Weather</p>
          <CurrentWeather />
        </div>
        <div className={style.extended_weather}>
          <p className={style.extended_weather__title}>Extended Forecast</p>
          <div className={style.extended_weather__daily_cards_container}>
            <ExtendedWeatherCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
