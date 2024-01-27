/**
 * @api {get} /api/users Read list
 *
 * Resolva o exercício aqui:
 *
 * - Crie uma API que retorne uma lista de usuários
 * - A request deve receber apenas o método GET
 * - A lista deve conter pelo menos 2 usuários
 * - Cada usuário deve ter um id, nome e email
 * - Utilize a interface IUser para tipar os dados
 */

import { NextApiRequest, NextApiResponse } from "next/types";
import { IUser } from "@/types/user.d";
import { v4 } from "uuid";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  const users: Array<IUser> = [
    {
      id: v4(),
      name: "Lucas",
      email: "lucasrodriguessantos0@gmail.com",
    },
    {
      id: v4(),
      name: "Maria",
      email: "mariateste@gmail.com",
    },
  ];

  if (method === "GET") {
    return res.status(200).json(users);
  }

  return res.status(500).json(users);
};
