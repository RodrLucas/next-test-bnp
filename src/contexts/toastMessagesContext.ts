import { IToastMessage } from "@/types/toast-message";
import { createContext, useContext } from "react";

export const ToastMessagesContext = createContext<{
  addToast: (message: IToastMessage) => void;
}>({
  addToast: () => {},
});

export const useToast = () => {
  const { addToast } = useContext(ToastMessagesContext);

  const showToast = (type: string) => {
    const messages: Array<IToastMessage> = [
      {
        id: "1",
        message: "Mensagem de sucesso",
        type: "success",
      },
      {
        id: "2",
        message: "Mensagem de erro",
        type: "error",
      },
    ];

    const message = messages.find((item) => item.type === type);

    if (message) {
      addToast(message);
    }
  };

  return { showToast };
};
