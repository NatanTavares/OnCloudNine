import { useContext } from "react";
import { WeatherDataContext } from "../contexts/WeatherContext";

export function useWeather() {
  const context = useContext(WeatherDataContext);

  return context;
}
