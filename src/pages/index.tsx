import Head from "next/head";
import { useWeather } from "../hooks/useWeather";
import { Header } from "../components/Header";

import styles from "../styles/home.module.scss";
import { IoIosAdd, IoMdCloudOutline } from "react-icons/io";

export default function Home() {
  const { data, loading } = useWeather();
  return (
    <>
      <Head>
        <title>OnCloudNine</title>
      </Head>

      <main className={styles.container}>
        {loading ? (
          <h1>Carregando...</h1>
        ) : (
          <>
            <Header />

            {!!data ? (
              <section>
                <>
                  <IoMdCloudOutline size={60} />

                  <div>
                    <div>
                      <h3>{data.temp}°C</h3>
                      <h2>{data.city}</h2>
                      <time>{data.date}</time>
                    </div>
                  </div>
                </>
              </section>
            ) : (
              <button
                className={styles.btnPlus}
                type="button"
                onClick={() => {}}
              >
                <IoIosAdd size={40} />
              </button>
            )}
          </>
        )}
      </main>
    </>
  );
}
