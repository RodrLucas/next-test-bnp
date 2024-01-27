/**
 * Formulário
 *
 * - Primeiramente vá até /src/pages/api/users/create.ts e implemente a API
 * - Deve ser implementado utilizando a lib react-hook-form
 * - O formulário deve ter os seguintes campos: nome, e-mail
 * - Os dois campos são obrigatórios e precisam de validação
 * - Ao dar 'submit', deve ser feito uma request para /api/users/create
 * - Lide com os possíveis erros
 */

import styles from "@/styles/formulario.module.css";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IUserCreate } from "@/types/user";

export default function Form() {
  const schema = Yup.object().shape({
    email: Yup.string()
      .email("Please, enter a valid email")
      .required("Please, enter user's email"),
    name: Yup.string()
      .required("Please, enter user's name")
      .min(3, "User's name must be at least 3 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors: schemaErrors },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  function handleFormSubmit(data: IUserCreate) {
    const request = {
      name: data.name,
      email: data.email,
    };

    try {
      fetch("api/users/create", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(request),
      });
    } catch (err) {
      console.log("err", err);
      alert(err)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <input type="text" placeholder="Name" {...register("name")} />
          <div>
            <label className={styles.tagError}>
              {schemaErrors.name?.message}
            </label>
          </div>

          <input type="email" placeholder="E-mail" {...register("email")} />
          <div>
            <label className={styles.tagError}>
              {schemaErrors.email?.message}
            </label>
          </div>

          <button type="submit" data-type="confirm">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
