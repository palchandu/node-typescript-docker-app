//user service
import { IUser } from "../interfaces/user.interface";
import User from "../model/user.model";

const userService = {
  createUser: async (userData: IUser) => {
    const user = new User(userData);
    return await user.save();
  },
  getUserById: async (id: string) => {
    return await User.findById(id);
  },
  updateUser: async (id: string, userData: IUser) => {
    return await User.findByIdAndUpdate(id, userData, { new: true });
  },
  deleteUser: async (id: string) => {
    return await User.findByIdAndDelete(id);
  },
};

export default userService;
