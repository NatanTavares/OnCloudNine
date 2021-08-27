import { createContext, ReactNode, useState } from "react";
import { useError } from "../hooks/useError";
import { IconType } from "react-icons/lib";
import axios from "axios";

import {
  WiCloud,
  WiDayCloudy,
  WiDaySunny,
  WiFog,
  WiHail,
  WiNa,
  WiNightAltCloudy,
  WiNightClear,
  WiRain,
  WiSnow,
  WiThunderstorm,
} from "react-icons/wi";

type ResponseData = {
  data: {
    results: {
      city: string;
      date: string;
      condition_slug: string;
      temp: number;
    };
  };
};

type WeatherData = {
  city: string;
  date: string;
  icon: IconType;
  temp: number;
};

type ContextData = {
  data: WeatherData | null;
  loading: boolean;
  getWeatherData: (cityName: string) => Promise<void>;
};

type ProviderProps = {
  children: ReactNode;
};

export const WeatherDataContext = createContext({} as ContextData);

export function WeatherDataProvider({ children }: ProviderProps) {
  const [data, setData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const { notifyErr } = useError();

  function setCurrentlyIcon(condition_slug: string) {
    switch (condition_slug) {
      case "clear_day":
        return WiDaySunny;
      case "cloudly_day":
        return WiDayCloudy;

      case "clear_night":
        return WiNightClear;
      case "cloudly_night":
        return WiNightAltCloudy;

      case "storm":
        return WiThunderstorm;
      case "snow":
        return WiSnow;
      case "hail":
        return WiHail;
      case "rain":
        return WiRain;
      case "fog":
        return WiFog;
      case "cloud":
        return WiCloud;

      default:
        return WiNa;
    }
  }

  async function getWeatherData(cityName: string) {
    setLoading(true);
    try {
      const response = await axios.post<ResponseData>("api/weatherData", {
        cityName,
      });
      const { city, condition_slug, date, temp } = response.data.data.results;
      const icon = setCurrentlyIcon(condition_slug);

      setData({ city, date, icon, temp });
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
