import { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useWeather } from "../../hooks/useWeather";
import { useError } from "../../hooks/useError";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import styles from "./styles.module.scss";
import { IoMdSearch, IoMdThermometer } from "react-icons/io";

type FormValues = {
  cityName: string;
};

type HeaderProps = {
  inputIsFocus: boolean;
};

const schema = yup.object().shape({
  cityName: yup
    .string()
    .min(3, "O nome da cidade deve ter pelo menos 3 caracteres")
    .max(58, "O nome da cidade deve ter no máximo 58 caracteres"),
});

export function Header({ inputIsFocus }: HeaderProps) {
  const { getWeatherData } = useWeather();
  const { notifyErr } = useError();

  const {
    handleSubmit,
    register,
    setFocus,
    formState: { errors },
  } = useForm<FormValues>({ resolver: yupResolver(schema) });

  async function onSubmit({ cityName }) {
    if (!!cityName.trim()) {
      await getWeatherData(cityName);
    }
  }

  useEffect(() => {
    const err = errors.cityName?.message;
    !!err && notifyErr({ err });
  }, [onSubmit]);

  useEffect(() => {
    setFocus("cityName");
  }, [inputIsFocus]);

  return (
    <header className={styles.container}>
      <div>
        <IoMdThermometer size={20} />
      </div>
      <form className={styles.searchBar} onSubmit={handleSubmit(onSubmit)}>
        <input {...register("cityName")} placeholder="Pesquisa por cidade" />
        <button type="submit">
          <IoMdSearch size={16} />
        </button>
      </form>
    </header>
  );
}
