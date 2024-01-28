/**
 * Modal de confirmação
 *
 * - Crie um component para o modal de confirmação
 * - Utilize o código abaixo como base
 * - O modal deve ser aberto ao clicar no botão "Abrir modal de confirmação"
 * - O título deve ser "Confirmação"
 * - O conteudo deve ser dinâmico
 */

import { useState } from "react";
import styles from "@/styles/modal.module.css";
import { Modal } from "@/components/Modal";
import { ConteudoDinamicoModalConfirmacao } from "@/components/ConteudoDinamicoModalConfirmacao";

export default function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleModalConfirm() {
    setModalIsOpen(false);
    alert("confirmado");
  }

  function handleModalClose() {
    setModalIsOpen(false);
  }

  function renderModalContent() {
    return <ConteudoDinamicoModalConfirmacao />;
  }

  return (
    <>
      <main className={styles.container}>
        <button type="button" onClick={() => setModalIsOpen(true)}>
          Abrir modal de confirmação
        </button>
      </main>

      {/* Renderizar modal de confirmação */}

      <Modal
        isOpen={modalIsOpen}
        title="Confirmação"
        onClose={handleModalClose}
        onConfirm={handleModalConfirm}
        footer={{ confirmText: "Criar usuário", hidden: true }}
      >
        {renderModalContent()}
      </Modal>
    </>
  );
}
