import { AppProps } from "next/app";
import { ErrorContextProvider } from "../contexts/ErrorContext";
import { WeatherDataProvider } from "../contexts/WeatherContext";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorContextProvider>
      <WeatherDataProvider>
        <Component {...pageProps} />
      </WeatherDataProvider>
    </ErrorContextProvider>
  );
}

export default MyApp;
