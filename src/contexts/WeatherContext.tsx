import { createContext, ReactNode, useState } from "react";
import { useError } from "../hooks/useError";
import axios from "axios";

type ResponseData = {
  data: {
    results: {
      temp: number;
      date: string;
      city: string;
    };
  };
};

type WeatherData = {
  temp: number;
  date: string;
  city: string;
};

type ContextData = {
  data: WeatherData;
  loading: boolean;
  getWeatherData: (cityName: string) => Promise<void>;
};

type ProviderProps = {
  children: ReactNode;
};

export const WeatherDataContext = createContext({} as ContextData);

export function WeatherDataProvider({ children }: ProviderProps) {
  const { notifyErr } = useError();

  const [data, setData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);

  async function getWeatherData(cityName: string) {
    setLoading(true);
    try {
      const response = await axios.post<ResponseData>("api/weatherData", {
        cityName,
      });
      const { city, date, temp } = response.data.data.results;
      setData({ city, date, temp });

      setLoading(false);
    } catch (error) {
      notifyErr({ err: error });
      setLoading(false);
    }
  }

  return (
    <WeatherDataContext.Provider value={{ data, getWeatherData, loading }}>
      {children}
    </WeatherDataContext.Provider>
  );
}
