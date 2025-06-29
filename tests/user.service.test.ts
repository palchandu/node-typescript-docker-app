import userService from "../src/services/user.service";
afterEach(() => {
  jest.clearAllMocks();
});
describe("User Service", () => {
  it("should create a user", async () => {
    const userData = {
      name: "John Doe",
      email: "john@example.com",
      password: "password123",
    };
    jest.spyOn(userService, "createUser").mockResolvedValue(userData as any);
    const user = await userService.createUser(userData);
    expect(user).toMatchObject(userData);
  });
  it("should get a user by ID", async () => {
    const userId = "12345";
    const userData = {
      _id: userId,
      name: "John Doe",
      email: "john@example.com",
      password: "password123",
    };
    jest.spyOn(userService, "getUserById").mockResolvedValue(userData as any);
    const user = await userService.getUserById(userId);
    expect(userService.getUserById).toHaveBeenCalledWith(userId);
    expect(userService.getUserById).toHaveBeenCalledTimes(1);
    expect(userService.getUserById).toHaveProperty("name");
    expect(user).toMatchObject(userData);
  });
  it("should update a user", async () => {
    const userId = "12345";
    const updatedData = {
      name: "John Smith",
      email: "john.smith@example.com",
      password: "newpassword123",
    };
    jest.spyOn(userService, "updateUser").mockResolvedValue(updatedData as any);
    const user = await userService.updateUser(userId, updatedData);
    expect(userService.updateUser).toHaveBeenCalledWith(userId, updatedData);
    expect(userService.updateUser).toHaveBeenCalledTimes(1);
    expect(user).toMatchObject(updatedData);
  });
});
