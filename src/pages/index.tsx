import Head from "next/head";
import { useWeather } from "../hooks/useWeather";
import { Header } from "../components/Header";

import styles from "../styles/home.module.scss";
import { IoMdCloudOutline } from "react-icons/io";

export default function Home() {
  const { city, date, temp } = useWeather();
  return (
    <>
      <Head>
        <title>OnCloudNine</title>
      </Head>

      <main className={styles.container}>
        <Header />

        {!!city && (
          <section>
            <IoMdCloudOutline size={60} />

            <div>
              <div>
                <h3>{temp}°C</h3>
                <h2>{city}</h2>
                <time>{date}</time>
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
