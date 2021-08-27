import React from "react";
import { IconType } from "react-icons";

import styles from "./styles.module.scss";

type Props = {
  data: {
    city: string;
    date: string;
    icon: IconType;
    temp: number;
  };
};

export function Card({ data }: Props) {
  return (
    <section className={styles.container}>
      {React.createElement(data.icon, { size: 70 })}
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
