/**
 * Lista
 *
 * - Primeiramente vá até /src/pages/api/users/index.ts e implemente a API
 * - Obter a lista de usuários da API
 * - Renderizar a lista de usuários
 */

import styles from "@/styles/lista.module.css";
import { IUser } from "@/types/user";

export default function Lista({ list }: { list: IUser[] }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Lista de usuários</h2>

        <div data-list-container>
          {list.map((item) => (
            <div key={item.id} data-list-item>
              {`ID ${item.id} - Usuário ${item.name} (${item.email})`}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:8080/api/users`);
  const list = await res.json();

  return { props: { list } };
}
