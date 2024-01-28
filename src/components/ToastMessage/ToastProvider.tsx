import { ToastMessagesContext } from "@/contexts/toastMessagesContext";
import { ReactNode, useState } from "react";
import { ToastMessage } from ".";
import { IToastMessage } from "@/types/toast-message";
import styles from "@/styles/context-api.module.css";

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<IToastMessage[]>([]);

  const addToast = (message: IToastMessage) => {
    setToasts((prevToasts) => [...prevToasts, message]);
  };

  return (
    <ToastMessagesContext.Provider value={{ addToast }}>
      {children}
      <div className={styles["toast-container"]}>
        {toasts.map((message) => (
          <ToastMessage key={message.id} content={message} />
        ))}
      </div>
    </ToastMessagesContext.Provider>
  );
}
