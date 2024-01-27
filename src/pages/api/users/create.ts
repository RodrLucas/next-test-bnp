/**
 * @api {get} /api/users/create Create User
 *
 * Resolva o exercício aqui:
 *
 * - Crie uma API que registre um usuário no array users
 * - A request deve receber apenas o método POST
 * - A request deve receber um body com os dados do usuário
 * - O body vai seguir a interface IUserCreate, removendo o id
 * - Você deve corrigir a interface IUserCreate em src/types/user.d.ts
 */

import { NextApiRequest, NextApiResponse } from "next/types";
import { IUser, IUserCreate } from "@/types/user.d";
import { v4 } from "uuid";
import * as Yup from "yup";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  const schema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
  });

  const users: IUser[] = [];

  if (method === "POST") {
    const { name, email }: IUserCreate = req.body;

    const userExists = users.filter((user) => user.email === email);

    if (userExists.length > 0) {
      return res.status(400).json({ error: "User already exists" });
    }

    try {
      schema.validateSync(req.body, { abortEarly: false });
    } catch (err: unknown) {
      if (err instanceof Yup.ValidationError) {
        return res.status(400).json({ error: err.errors });
      }
      return res.status(500).json({ error: "Internal Server Error" });
    }

    const newUser: IUser = { id: v4(), name, email };

    users.push(newUser);

    return res.status(201).json(newUser);
  }

  return res.status(400).json(undefined);
};
