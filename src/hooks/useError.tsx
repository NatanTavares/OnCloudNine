import { useContext } from "react";
import { ErrorContext } from "../contexts/ErrorContext";

export function useError() {
  const context = useContext(ErrorContext);

  return context;
}
