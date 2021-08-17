import { createContext, ReactNode, useState } from "react";
import { useError } from "../hooks/useError";
import axios from "axios";

type WeatherData = {
  data: {
    results: {
      temp: number;
      date: string;
      city: string;
    };
  };
};

type ContextData = {
  temp: number;
  date: string;
  city: string;
  getWeatherData: (cityName: string) => Promise<void>;
};

type ProviderProps = {
  children: ReactNode;
};

export const WeatherDataContext = createContext({} as ContextData);

export function WeatherDataProvider({ children }: ProviderProps) {
  const { notifyErr } = useError();

  const [temp, setTemp] = useState(0);
  const [date, setDate] = useState("");
  const [city, setCity] = useState("");

  async function getWeatherData(cityName: string) {
    try {
      const response = await axios.post<WeatherData>("api/weatherData", {
        cityName,
      });
      const { city, date, temp } = response.data.data.results;

      setCity(city);
      setDate(date);
      setTemp(temp);
    } catch (error) {
      notifyErr({ err: error });
    }
  }

  return (
    <WeatherDataContext.Provider value={{ temp, date, city, getWeatherData }}>
      {children}
    </WeatherDataContext.Provider>
  );
}
