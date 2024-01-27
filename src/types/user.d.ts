export interface IUser {
  id: string;
  name: string;
  email: string;
}

export interface IUserCreate extends Omit<IUser, "id"> {}