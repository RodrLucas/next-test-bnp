/**
 * Context Api
 *
 * - Criar um contexto para exibir mensagens de sucesso e erro
 * - Criar um componente para exibir as mensagens
 * - Criar um hook para disparar e consumir as mensagens
 * - Disparar as mensagens a partir dos botões abaixo
 */

import { useToast } from "@/contexts/toastMessagesContext";
import styles from "@/styles/context-api.module.css";

export default function ContextApi() {
  const { showToast } = useToast();

  return (
    <>
      <div className={styles.container}>
        <button type="button" onClick={() => showToast("success")}>
          Disparar mensagem de sucesso
        </button>
        <button type="button" onClick={() => showToast("error")}>
          Disparar mensagem de erro
        </button>
      </div>
    </>
  );
}
