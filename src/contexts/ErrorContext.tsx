import { createContext, ReactNode } from "react";
import { toast, ToastContainer, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type ContextData = {
  notifyErr: (props: NotifyErrProps) => void;
};

type ProviderProps = {
  children: ReactNode;
};

type NotifyErrProps = {
  err: string;
  options?: ToastOptions;
};

export const ErrorContext = createContext({} as ContextData);

export function ErrorContextProvider({ children }: ProviderProps) {
  const notifyErr = ({ err, ...options }: NotifyErrProps) => {
    const toastOptions: ToastOptions = {
      ...options,
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      draggable: true,
    };

    toast.error(`⚠️ ${err}`, toastOptions);
  };

  return (
    <ErrorContext.Provider value={{ notifyErr }}>
      <ToastContainer />
      {children}
    </ErrorContext.Provider>
  );
}
