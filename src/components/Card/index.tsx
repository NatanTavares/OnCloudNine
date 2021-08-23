import React from "react";
import { IconType } from "react-icons";

import styles from "./styles.module.scss";

type Props = {
  data: { temp: number; date: string; city: string };
  icon: IconType;
};

export function Card({ data, icon }: Props) {
  return (
    <section className={styles.container}>
      {React.createElement(icon, { size: 70 })}
      <div>
        <div>
          <h3>{data.temp}°C</h3>
          <h2>{data.city}</h2>
          <time>{data.date}</time>
        </div>
      </div>
    </section>
  );
}
