import Head from "next/head";
import { useState } from "react";
import { useWeather } from "../hooks/useWeather";
import { Header } from "../components/Header";
import { Card } from "../components/Card";

import styles from "../styles/home.module.scss";
import { IoIosAdd } from "react-icons/io";

export default function Home() {
  const [inputIsFocus, setInputIsFocus] = useState(false);
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
            <Header inputIsFocus={inputIsFocus} />

            {!!data ? (
              <Card data={data} />
            ) : (
              <button
                className={styles.btnPlus}
                type="button"
                onClick={() => {
                  setInputIsFocus(!inputIsFocus);
                }}
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
