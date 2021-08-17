import { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useWeather } from "../../hooks/useWeather";
import { useError } from "../../hooks/useError";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import styles from "./styles.module.scss";
import { IoMdSearch } from "react-icons/io";

const schema = yup.object().shape({
  cityName: yup
    .string()
    .min(3, "O nome da cidade deve ter pelo menos 3 caracteres")
    .max(58, "O nome da cidade deve ter no máximo 58 caracteres"),
});

export function Header() {
  const { getWeatherData } = useWeather();
  const { notifyErr } = useError();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  async function onSubmit({ cityName }) {
    await getWeatherData(cityName);
  }

  useEffect(() => {
    const err = errors.cityName?.message;
    !!err && notifyErr({ err });
  }, [onSubmit]);

  return (
    <header className={styles.container}>
      <form className={styles.searchBar} onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Search by city" {...register("cityName")} />
        <button type="submit">
          <IoMdSearch />
        </button>
      </form>
    </header>
  );
}
