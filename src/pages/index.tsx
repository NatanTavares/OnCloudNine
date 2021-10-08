import { useRef } from "react";
import Head from "next/head";
import { useWeather } from "../hooks/useWeather";
import { Header } from "../components/Header";
import { Card } from "../components/Card";

import styles from "../styles/home.module.scss";
import { IoIosAdd } from "react-icons/io";

export default function Home() {
  const { data, loading } = useWeather();
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFocusToInput() {
    inputRef.current.focus();
  }

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
            <Header inputRef={inputRef} />

            {!!data ? (
              <Card data={data} />
            ) : (
              <button
                className={styles.btnPlus}
                type="button"
                onClick={handleFocusToInput}
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
