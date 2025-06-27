export interface IUser {
  id?: string;
  name: string;
  email: string;
  password: string;
}
export interface IUserService {
  createUser(userData: IUser): Promise<IUser>;
  getUserById(id: string): Promise<IUser | null>;
  updateUser(id: string, userData: IUser): Promise<IUser | null>;
  deleteUser(id: string): Promise<IUser | null>;
}
