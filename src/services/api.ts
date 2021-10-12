import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.hgbrasil.com",
});

export const clientApi = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_URL}/api`,
});
