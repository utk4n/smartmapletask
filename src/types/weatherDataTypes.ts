export type Weather = {
  temperature: string;
  type: string;
  date: string;
};

export type WeatherState = {
  list: Weather[];
  error: string | null;
  status: "loading" | "idle";
};
