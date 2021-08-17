import Head from "next/head";
import { Header } from "../components/Header/Header";

import styles from "../styles/home.module.scss";
import { IoMdCloudOutline } from "react-icons/io";

export default function Home() {
  return (
    <>
      <Head>
        <title>OnCloudNine</title>
      </Head>

      <main className={styles.container}>
        <Header />

        <section>
          <IoMdCloudOutline size={60} />

          <div>
            <h3>11°C</h3>
            <div>
              <h2>Belo Horizonte, Brazil</h2>
              <time>Sunday 15 August, 2021</time>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
