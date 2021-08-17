import { FormEvent, useState } from "react";
import axios from "axios";

import styles from "./styles.module.scss";
import { IoMdSearch } from "react-icons/io";

export function Header() {
  const [cityName, setCityName] = useState("");

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    try {
      const { data } = await axios.post("api/weatherData", { cityName });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <header className={styles.container}>
      <form
        className={styles.searchBar}
        onSubmit={(event) => handleSubmit(event)}
      >
        <input
          type="text"
          placeholder="Search by city"
          value={cityName}
          onChange={(event) => setCityName(event.target.value)}
        />
        <button>
          <IoMdSearch />
        </button>
      </form>
    </header>
  );
}
